import React, { Component } from 'react';
import { IndexNav } from './components/navigator'
import {
  Platform,
  StyleSheet,
  Text,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
