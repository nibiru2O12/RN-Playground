import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native';

class ModalScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Modal</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    display : "flex",
    justifyContent : "center",
    alignItems: 'center',
  }
});

export default ModalScreen;