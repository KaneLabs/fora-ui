import React from 'react';
import propTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { SEARCH } from 'queries';
import { withNavigation } from 'react-navigation';
import { SearchListItem } from './SearchListItem';
import { List } from 'ui';

export const SearchList = withNavigation(
  ({ products = [], navigation, onSelect }) => {
    // const navigateToItem = item => {
    //   navigation.navigate('ITEM', { ...item });
    // };
    if (products.length > 0) {
      return (
        <List testID="SearchResults" noPadding>
          {products.map((product, i) => (
            <SearchListItem
             testID={`SearchResult-${i}`}
              // onPressIn={() => navigateToItem(product)}
              onSelect={() => onSelect(product)}
              key={product.id}
              {...product}
            />
          ))}
        </List>
      );
    }

    return null;
  },
);

SearchList.propTypes = {
  searchText: propTypes.string.isRequired,
};
