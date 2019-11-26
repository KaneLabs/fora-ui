import React, { useEffect } from 'react';
import { Animated } from 'react-native';

export function FadeIn({ fadeIn, children }) {
  if (!fadeIn) return null;

  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      delay: 2000,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity, flex: 1 }}>
      {children}
    </Animated.View>
  );
}


export const useFadeIn = ({ duration = 2000, delay = 0 }) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      delay,
    }).start();
  }, []);

  return opacity;
};
