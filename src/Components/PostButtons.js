import React from 'react';
import { TouchableHighlight, StyleSheet, View } from 'react-native';

import {CreateStripeCardInput, Typography} from 'ui';
// import CreateStripeCardInput from './CreateStripeCardInput';

import { foraGoldOpaque, unit, canvas3Opaque, borderRadius, borderColor, } from 'themes';
import { type } from './device';

import {
  ME,
  USER_HAS_PAYMENT_SOURCE,
  TIP_USER_POST,
  CREATE_STRIPE_CARD,
} from 'queries';

import { Query, Mutation } from 'react-apollo';

const styles = {
  buttonRow: {
    // paddingTop: 0,
    // paddingLeft: unit * unit,
    // paddingRight: unit*2,
    // padding: unit,
    justifyContent: 'flex-end',
    // borderColor,
    // borderRadius,
    // borderTopWidth: 0,
    // borderTopLeftRadius: 0,
    // borderTopRightRadius: 0,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderLeftWidth: type === 'desktop' ? StyleSheet.hairlineWidth : 0,
    // borderRightWidth: type === 'desktop' ? StyleSheet.hairlineWidth : 0,
  },
  tipButton: {
    alignItems: 'center',
    padding: type === 'desktop' ? unit : unit*1.5,
  },
};

class TipButton extends React.Component {
  state = { tipButtonsOpen: false }

  render() {
    const { postId } = this.props;

    return (
      <Query query={USER_HAS_PAYMENT_SOURCE}>
        {({ data, error }) => (
          <Mutation mutation={TIP_USER_POST}>
            {tipUserPost => (
              <Mutation mutation={CREATE_STRIPE_CARD}>
                {createStripeCard => {

                  if (this.state.tipButtonsOpen) {
                    return (
                      <CreateStripeCardInput />
                    )
                  }

                  return (
                    <TouchableHighlight
                      style={styles.tipButton}
                      onPress={async () => {
                        if (error) {
                          return this.setState({ tipButtonsOpen: true })
                        }

                        if (data.userHasPaymentSource) {
                          const { data } = await tipUserPost({ variables: { postId } });

                          console.log('tipUserPost data', data);
                        } else {
                          this.setState({ tipButtonsOpen: true })
                        }
                      }}
                    >
                      <View>
                        <Typography variant='button' style={{ color: foraGoldOpaque }}>
                          {'TIP $1'}
                        </Typography>
                      </View>
                    </TouchableHighlight>
                  )
                }}
              </Mutation>
            )}
          </Mutation>
        )}
      </Query>
    )
  }
}

class CreatePostButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.createPostButton}
        onPress={async () => {
          if (error) {
            return this.setState({ tipButtonsOpen: true })
          }

          if (data.userHasPaymentSource) {
            const { data } = await tipUserPost({ variables: { postId } });

            console.log('tipUserPost data', data);
          } else {
            this.setState({ tipButtonsOpen: true })
          }
        }}
      >
        <View>
          <Typography variant='button' style={{ color: foraGoldOpaque }}>
            {'TIP $1'}
          </Typography>
        </View>
      </TouchableHighlight>
    )
  }
}

const PostButtons = ({ postId, }) => {
  return (
    <View style={styles.buttonRow}>
      <TipButton postId={postId} />
    </View>
  )
}

export default PostButtons;
