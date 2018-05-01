import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';

import TabNav from './components/Navigations/TabNav';
import Drawer from './components/Navigations/Drawer';
import Home from './components/Home';

const RootNav = StackNavigator({
  Home: {screen:Home},
  TabNav: {screen: TabNav},
  Drawer: {screen: Drawer}
},
{
  initialRouteName:"Home"
});

export default class App extends React.Component {
  render() {
    return (
      <RootNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
