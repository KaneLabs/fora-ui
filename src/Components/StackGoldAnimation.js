import React from 'react';
import Modal from './Modal';
import Typography from './Typography';
import Paper from './Paper';

import { Animated } from 'react-native';


class StackGoldAnimation extends React.Component {
  state = {
    amountAnim: new Animated.Value(0),
    amount: 1,
  }

  componentDidMount() {
    this.state.amountAnim.addListener(e => {
      this.setState({ amount: Math.floor(e.value) + 1 })
    });


    Animated.timing(this.state.amountAnim,
      {
        toValue: 1000,
        duration: 60000,
      }
    ).start();
  }

  componentWillUnmount() {
    this.state.amountAnim.removeAllListeners();
  }

  render() {
    return (
        <Paper>
          <Typography variant={'button'}>
            {`$${(this.state.amount/100).toFixed(2)}`}
          </Typography>
        </Paper>
    );
  }
}

export default StackGoldAnimation;
