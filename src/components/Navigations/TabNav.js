import React,{Component} from 'react';
import {View,Text} from 'react-native';

import Button from '../../UI/Button';

class TabNav extends Component {
  
  static navigationOptions = {
    title: 'Tab Nav',
  };

  render(){

    const {navigation} = this.props;
    
    return(
      <View>
        <Text>Tab Navigations</Text>
        <Button title="BACK" onPress={()=>navigation.goBack()} />
      </View>
    )
  }

}

export default TabNav;