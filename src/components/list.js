import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Foundation'
import Swipeout from 'react-native-swipeout';
import styles from '../common/styles.js';


import {
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };
  }

  render() {
    const { navigate } = this.props.navigation
    let swipeoutBtns = [
      {
        component:
          (
            <View style={styles.swipeIcon}>
              <Icon style={styles.icon} name='shopping-cart'/>
            </View>
          )
      }
    ];

    let groceries = [];
    this.props.navigation.state.params ?
      groceries = this.props.navigation.state.params :
      groceries = [
        "Eggs Medium 12 pack",
        "Fresh Basil",
        "Wholegrain Bread 1 pkg",
        "Red Wine",
        "Vodka 12l",
        "Orange Juice 1l"
      ];


    const selected = this.state.cart;
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <View></View>
          <Text style={styles.headerText}>Groceries</Text>
          <TouchableOpacity style={styles.headerIcoLeft}>
            <Icon style={[styles.icon, {fontSize: 25}]} name='clipboard-pencil'/>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {
            groceries.map((item) => (
                <Swipeout
                  left={swipeoutBtns}
                  buttonWidth={62}
                  onOpen={(sectionID, rowId, direction) => {
                    if ( direction && !selected.includes(item)) {
                      selected.push(item);
                      this.setState({cart: selected});
                    }
                  }}
                  onClose={(sectionID, rowId, direction) => {
                    if ( direction ) {
                      selected.splice(selected.indexOf(item), 1);
                      this.setState({cart: selected});
                    }
                  }}
                >
                  <View style={styles.listItem}>
                    <Text style={styles.listItemText}>{item}</Text>
                    <View style={styles.iconBox}>
                      <Icon style={styles.icon} name='home'/>
                    </View>
                  </View>
                </Swipeout>
              )
            )
          }
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.footerCol}>
            <TouchableOpacity>
              <Icon style={[styles.icon, {fontSize: 40}]} name='list'/>
            </TouchableOpacity>
          </View>
          <View style={styles.footerCol}>
            <TouchableOpacity
              onPress={() => {
                let cart = this.state.cart;
                navigate('cart', { cart })
              }}
            >
              <Icon style={[styles.icon, styles.iconInactive, {fontSize: 40}]} name='shopping-cart'/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default List