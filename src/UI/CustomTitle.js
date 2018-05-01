import React from 'react'
import {TouchableOpacity,View,Text,StyleSheet} from 'react-native';

const CustomTitle = props => {
  return (
    <TouchableOpacity onPress={()=>alert(1)}>
      <View>
        <Text style={props.textStyle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomTitle;