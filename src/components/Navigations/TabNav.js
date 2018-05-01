import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import Button from '../../UI/Button';

class TabNav extends Component {
  
  // static navigationOptions = {
  //   title: 'Tab Nav',
  // };

  // props : navigation, navigationOptions, screenProps
  // return an object
  static navigationOptions = ({navigation}) => {

    const {params} = navigation.state
    const  title = params ? params.title : "TabNav"

    return ({
      headerTitle : <CustomTitle title={title} />,
    })
  }

  render(){

    const {navigation} = this.props;
    const {params} = navigation.state;

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

const CustomTitle = props => {
  return (
    <TouchableOpacity onPress={()=>alert(1)}>
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TabNav;