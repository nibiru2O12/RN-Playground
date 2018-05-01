import React from 'react'
import {TouchableOpacity,View,Text,StyleSheet} from 'react-native';

const TouchableCard  = props => {
  return(
      <TouchableOpacity  {...props} style={styles.card} onPress={props.onPress}>
        {props.children}
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    minHeight:80
  }
});


export default TouchableCard;
