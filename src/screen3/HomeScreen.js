import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {Header, ImageCard, Layout} from '../components/uikit';
import {SPIDER_DETAILS} from '../routes';

const url = 'http://api.tvmaze.com/search/shows?q=spider-man';

class HomeScreen extends Component {
  state = {
    title: 'SPIDERMAN',
    data: [],
  };

  componentDidMount = async () => {
    try {
      await fetch(url)
        .then(response => response.json())
        .then(data => this.setState({data}));
    } catch (error) {
      throw error;
    }
  };

  render() {
    const {title, data} = this.state;
    const {navigation} = this.props;

    return (
      <View>
        <Header
          title={title}
          leftIcon="ios-menu"
          leftColor="#fff"
          onPress={() => navigation.openDrawer()}
        />
        <ScrollView>
          <Layout>
            {data.map(item => (
              <ImageCard
                data={item.show}
                key={item.show.id}
                onPress={() => navigation.navigate(SPIDER_DETAILS, item.show)}
              />
            ))}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
