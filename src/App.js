import React, { Component } from 'react';
import { IndexNav } from './components/navigator'
import {
  View,
  StatusBar
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <IndexNav />
      </View>
    );
  }
}