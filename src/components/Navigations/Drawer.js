import React,{Component} from 'react';
import {View,Text} from 'react-native';

import Button from '../../UI/Button';

class Drawer extends Component {
  static navigationOptions = {
    title: 'Drawer',
  };
  render(){
    const {navigation} = this.props;
    return(
      <View>
        <Text>Drawer Navigations</Text>
        <Button title="BACK" onPress={()=>navigation.goBack()} />
      </View>
    )
  }
}

export default Drawer;