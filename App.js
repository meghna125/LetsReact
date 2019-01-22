import React, { Component } from 'react';
import { AppRegistry, View ,Text,Image,StyleSheet} from 'react-native';

import{createBottomTabNavigator} from 'react-navigation'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Cart from './screens/Cart'
import Fav from './screens/Fav'

class App extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home:{
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('./assets/house.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
        )
      }
  },
  Fav:{
    screen: Fav,
    navigationOptions: {
      tabBarLabel: 'Favourite',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/heart.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
    
  },
  Cart:{
    screen : Cart,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/cart.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
    
  },
  Profile:{
    screen : Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/profile.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
    
  }
})