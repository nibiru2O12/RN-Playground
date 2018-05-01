import React,{Component} from 'react';
import {View,Text} from 'react-native';

class Drawer extends Component {
  static navigationOptions = {
    title: 'Drawer',
  };
  render(){
    return(
      <View>
        <Text>Drawer Navigations</Text>
      </View>
    )
  }
}

export default Drawer;