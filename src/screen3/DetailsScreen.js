import React, {PureComponent} from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
import {Header, ImageBigCard} from '../components/uikit';
import {WHITE, BLUE, w} from '../../constans';
import {STARGATE_HOME} from '../routes';

export default class DetailsScreen extends PureComponent {
  render() {
    const {image, name, summary} = this.props.navigation.state.params;
    const {navigation} = this.props;
    const data = {image, name};
    const {container, h1, h2, sub} = styles;
    return (
      <View style={container}>
        <Header
          detail
          title={name}
          onPress={() => navigation.goBack()}
          leftIcon="ios-arrow-back"
          leftColor="#fff"
        />
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Button
              title="Press me"
              color="#841584"
              onPress={() => navigation.navigate(STARGATE_HOME)}
            />
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: '#fff',
  },
  h1: {
    fontFamily: 'Roboto',
    fontSize: 30,
    padding: 15,
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'Roboto',
    fontSize: 20,
    padding: 15,
    color: 'grey',
    paddingHorizontal: 15,
    textAlign: 'center',
  },
});
