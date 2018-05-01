import React, { Component } from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

import TouchableCard from '../UI/TouchableCard';
import CustomTitle from '../UI/CustomTitle';

class Home extends Component {

  static navigationOptions = ({navigation,navigationOptions}) => {
    return ({
      title : "Home"
    });
  }

  render(){
    
    const {navigation} = this.props;

    return(
      <View style={styles.container}>
          <TouchableCard onPress={()=>navigation.navigate('Info')}>
            <Text>Info Screen</Text>
          </TouchableCard>
          
          {/* params are added as second params on navigate */}
          <TouchableCard onPress={()=>navigation.navigate('Info',{title:"Info Title"})}>
            <Text>Info Screen With Params</Text>
          </TouchableCard>

          {/* passing a component to be used as headerTitle */}
          <TouchableCard 
            onPress={()=>navigation.navigate('Info',{title:<CustomTitle title="Touch Me!" textStyle={{fontWeight: 'bold'}} />})}>
            <Text>Info Screen With Title as Component</Text>
          </TouchableCard>

          <TouchableCard onPress={()=>navigation.navigate('TabNav')}>
            <Text>Tab Navigation</Text>
          </TouchableCard>

          <TouchableCard onPress={()=>navigation.navigate('Drawer')}>
            <Text>Drawer Navigation</Text>
          </TouchableCard>

          <TouchableCard onPress={()=>navigation.navigate('Modal')}>
            <Text>Modal Stack</Text>
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

