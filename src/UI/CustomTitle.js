import React from 'react'
import {TouchableOpacity,View,Text} from 'react-native';

const CustomTitle = props => {
  return (
    <TouchableOpacity onPress={()=>alert(1)}>
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomTitle;