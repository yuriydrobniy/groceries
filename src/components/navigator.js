import { StackNavigator } from 'react-navigation'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Foundation'

import List from './list'
import Cart from './cart'

export const IndexNav = StackNavigator({
  list: {
    screen: List,
  },
  cart: {
    screen: Cart,
  }
}, {
  initialRouteName: 'list',
  headerMode: 'none',
})