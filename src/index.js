import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';

import TabNav from './components/Navigations/TabNav';
import Drawer from './components/Navigations/Drawer';
import Home from './components/Home';
import ModalScreen from './components/ModalScreen';
import Info from './components/Info';

const MainStack = StackNavigator({
    Home: {screen:Home},
    TabNav: {screen: TabNav},
    Drawer: {screen: Drawer},
    Info: {screen:Info}
},
{
  navigationOptions:{
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

const RootNav = StackNavigator({
  Main: {screen:MainStack},
  Modal:{screen:ModalScreen}
},{
  headerMode:"none",
  mode:"modal"
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
