import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import {w} from '../../../constans';

const ImageCard = ({data, onPress}) => {
  const {container, h1, cover, sub} = styles;
  const {image, name} = data;
  const img = `https${image.medium.slice(4)}`;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={sub}>
          <Image style={cover} source={{uri: img}} />
        </View>
        <Text style={h1}>{name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    paddingVertical: 10,
  },
  sub: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  h1: {
    paddingTop: 10,
    fontFamily: 'Roboto',
    fontSize: 22,
    alignSelf: 'center',
    textAlign: 'center',
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
  },
});

export {ImageCard};
