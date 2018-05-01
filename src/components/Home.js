import React, { Component } from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

class Home extends Component {
  
  static navigationOptions = {
    title : "Home"
  }

  render(){
    
    const {navigation} = this.props;

    return(
      <View style={styles.container}>
          <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('TabNav')}>
            <Text>Tab Navigation</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.card} onPress={()=>navigation.navigate('Drawer')}>
            <Text>Drawer Navigation</Text>
          </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  card: {
    margin: 10,
    padding: 10
  }
});

export default Home;

