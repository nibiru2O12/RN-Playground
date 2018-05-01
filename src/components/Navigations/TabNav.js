import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import Button from '../../UI/Button';

class TabNav extends Component {
  
  state = {
    count : 0
  }

  // static navigationOptions = {
  //   title: 'Tab Nav',
  // };

  // props : navigation, navigationOptions, screenProps
  // return an object
  static navigationOptions = ({navigation}) => {

    const {params} = navigation.state
    const  title = params ? params.title : "TabNav"

    return ({
      headerTitle : title,
      headerRight: (
        <Button
          onPress={params._increment}
          title="Inc"
          color="#fff"
        />
      ),
    })
  }

  componentWillMount(){
    this.props.navigation.setParams({_increment:this._increment})
  }

  _increment = () => {
    this.setState(prev=>({
      count: prev.count + 1
    }));
  }

  render(){

    const {navigation} = this.props;
    const {params} = navigation.state;

    console.log(this.state.count);
   
    return(
      <View>
        <Text>Tab Navigations</Text>
        <Button title="BACK" onPress={()=>navigation.goBack()} />
       
        {/* updating navigation state */}
        <Button 
          title="Change navigation state Title = Updated" 
          onPress={()=>navigation.setParams({title:"Updated"})} />
      </View>
    )
  }

}


export default TabNav;