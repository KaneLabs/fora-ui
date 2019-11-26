import React from 'react';
import TextField from './TextField';
import { graphql } from 'react-apollo';
import { CREATE_STRIPE_CARD } from 'queries';

class CreateStripeCardInput extends React.Component {
  state = {
    number: '',
    month: 12,
    year: 2020,
    cvc: '343',
  }

  componentDidUpdate = async (lastProps, lastState) => {
    if (this.state.number.length === 16 && lastState.number.length === 15) {
      // entered full credit card details
      console.log('this.props', this.props);
      const { data } = await this.props.mutate({ variables: this.state });

      console.log('data: ', data);
    }
  }

  render() {
    return (
      <TextField
        onChangeText={number => this.setState({ number })}
        value={this.state.number}
      />
    )
  }
}

export default graphql(CREATE_STRIPE_CARD)(CreateStripeCardInput);
