import React from 'react';
import { View } from 'react-native';
import { Row, ProductSmall, BodyText } from 'ui';
import EStyleSheet from 'react-native-extended-stylesheet';

export const ProductListSmall = ({ products = [] }) => {
  return (
    <View style={styles.productLst}>
      <BodyText style={styles.subheader} text="Order Items" gutterBottom />
      <Row style={styles.row}>
        {products.map(product => (
          <ProductSmall key={product.id} {...product} />
        ))}
      </Row>
    </View>
  );
};

const styles = EStyleSheet.create({
  productLst: { width: '100%', paddingVertical: 8 },
  subheader: { paddingHorizontal: 16 },
  row: { paddingHorizontal: 8, overflow: 'hidden' },
});
