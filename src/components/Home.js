import React, { Component } from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

import TouchableCard from '../UI/TouchableCard';

class Home extends Component {
  
  static navigationOptions = {
    title : "Home"
  }

  render(){
    
    const {navigation} = this.props;

    return(
      <View style={styles.container}>
          <TouchableCard onPress={()=>navigation.navigate('TabNav')}>
            <Text>Tab Navigation</Text>
          </TouchableCard>
          <TouchableCard onPress={()=>navigation.navigate('TabNav',{id:"001"})}>
            <Text>Tab Navigation With Params</Text>
          </TouchableCard>
          <TouchableCard onPress={()=>navigation.navigate('Drawer')}>
            <Text>Drawer Navigation</Text>
          </TouchableCard>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    display : "flex",
    flexDirection: 'column',
    backgroundColor : "#f4f3ed",
    justifyContent : "flex-start",
    padding : 5
  }
});

export default Home;

