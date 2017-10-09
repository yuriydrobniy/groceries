import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Foundation'
import styles from '../common/styles.js';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

class Cart extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let { cart } = this.props.navigation.state.params
    const { navigate } = this.props.navigation
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <View></View>
          <Text style={styles.headerText}>Cart</Text>
        </View>
        <ScrollView>
          {
            cart.map((item) => (
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>{item}</Text>
                <View style={styles.iconBox}>
                  <Icon style={styles.icon} name='shopping-cart'/>
                </View>
              </View>
            ))
          }
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.footerCol}>
            <TouchableOpacity
              onPress={() => {
                navigate('list')
              }}
            >
              <Icon style={[styles.icon, styles.iconInactive, {fontSize: 40}]} name='list'/>
            </TouchableOpacity>
          </View>
          <View style={styles.footerCol}>
            <TouchableOpacity>
              <Icon style={[styles.icon, {fontSize: 40}]} name='shopping-cart'/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default Cart