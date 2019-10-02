import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {w} from '../../../constans';

const ImageBigCard = ({data}) => {
  const {container, cover, sub} = styles;
  const {image} = data;
  const img = `https${image.medium.slice(4)}`;

  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{uri: img}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  sub: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  cover: {
    width: w / 2.4,
    height: w * 0.67,
    borderRadius: 10,
  },
});

export {ImageBigCard};
