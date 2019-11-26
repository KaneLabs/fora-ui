import React from 'react';
import { FlatList, View, } from 'react-native';
import { Query, Subscription } from 'react-apollo';

import { unit, NAV_HEIGHT, FEED_WIDTH, } from 'themes';
import { MAIN_FEED, NEW_POST } from 'queries';

import Button from './Button';
import Post from './Post';
import Typography from './Typography';
import ListHeader from './ListHeader';
import LoadingIcon from './LoadingIcon';
import { debounce } from 'lodash';

import type from './device';

class Feed extends React.Component {
  componentDidMount() {
    return this.props.subscribeToNewPosts()
  }

  // onEndReachedCalledDuringMomentum = true

  onEndReached = async ({ distanceFromEnd }) => {
    console.log('end reached');

    // if (!this.onEndReachedCalledDuringMomentum) {
        await this.props.onLoadMore();
    //     this.onEndReachedCalledDuringMomentum = true;
    // }
  }

  onLoadMore = () => {
    this.props.onLoadMore()
  }

  render() {
    const { error, loading, data, openProfile } = this.props;

      return (
        <React.Fragment>
          <FlatList
            data={this.props.data.mainFeed.posts}
            renderItem={({ item }) => (
              <Post
                key={item.id}
                {...item}
                openProfile={openProfile}
              />
            )}
            keyExtractor={item => {
              console.log('item', item);
              return item && item.id || null
            }}
            style={{ width: '100%',  flex: 1, }}
            onEndReached = {this.onEndReached}
            onEndReachedThreshold={0.3}
          />

          {loading && <LoadingIcon />}
        </React.Fragment>
      )
  }
}


const MainFeed = ({ openProfile }) => {
  return (
    <Query query={MAIN_FEED} variables={{ offset: 0 }}>
        {({ subscribeToMore, fetchMore, ...result }) => {
          if (result.data && result.data.mainFeed) {
            return (
              <Feed
                openProfile={openProfile}
                {...result}
                onLoadMore={() =>
                  fetchMore({
                    query: MAIN_FEED,
                    variables: { offset: result.data.mainFeed.offset + 5 },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      const prevPosts = prev.mainFeed.posts;
                      const nextPosts = fetchMoreResult.mainFeed.posts;

                      return {
                        mainFeed: {
                          // By returning `cursor` here, we update the `fetchMore` function
                          // to the new cursor.
                          offset: fetchMoreResult.mainFeed.offset,
                          posts: [...prevPosts, ...nextPosts],
                          __typename: prev.mainFeed.__typename
                        },
                      };
                    }
                  })
                }
                subscribeToNewPosts={() =>
                  subscribeToMore({
                    document: NEW_POST,
                    // variables: { repoName: params.repoName },
                    updateQuery: (prev, { subscriptionData }) => {
                      if (!subscriptionData.data) return prev;
                      const newPost = subscriptionData.data.newPost;

                      const nextFeed = Object.assign({}, prev, {
                        mainFeed: {
                          ...prev.mainFeed,
                          posts: [newPost, ...prev.mainFeed.posts]
                        }
                      });

                      return nextFeed;
                    }
                  })
                }
              />
            )
          }

          return <LoadingIcon />;
        }}
      </Query>
  );
};

export default MainFeed;
