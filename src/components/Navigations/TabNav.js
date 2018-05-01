import React,{Component} from 'react';
import {View,Text} from 'react-native';

class TabNav extends Component {
  
  static navigationOptions = {
    title: 'Tab Nav',
  };

  render(){
    return(
      <View>
        <Text>Tab Navigations</Text>
      </View>
    )
  }
  
}

export default TabNav;