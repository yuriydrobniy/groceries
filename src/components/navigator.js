import { StackNavigator } from 'react-navigation'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Foundation'

import List from './list'
import Cart from './cart'

export const IndexNav = StackNavigator({
  list: {
    screen: List,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='list' size={30} color={tintColor}/>
      )
    }
  },
  cart: {
    screen: Cart,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='shopping-cart' size={30} color={tintColor}/>
      )
    }
  }
}, {
  initialRouteName: 'list',
  headerMode: 'none',
})