import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {w} from '../../../constans';

const Header = ({title, detail, onPress, leftIcon, leftColor}) => {
  const {viewStyle, textStyle, leftButtonStyle} = styles;

  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name={leftIcon}
          style={[leftButtonStyle, {paddingLeft: detail ? 10 : 0}]}
          color={leftColor}
        />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[textStyle, {paddingLeft: leftIcon ? 10 : 0}]}>
        {title}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#30d0fe',
    height: 80,
    // justifyContent: 'center',
    paddingLeft: 10,
    paddingTop: 30,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    elevation: 7,
  },
  textStyle: {
    color: 'white',
    fontSize: 28,
    width: w - 40,
    fontFamily: 'Roboto',
  },
  leftButtonStyle: {
    marginTop: 3,
    marginRight: 20,
    fontSize: 35,
  },
});

export {Header};
