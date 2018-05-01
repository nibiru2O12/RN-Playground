import React from 'react';
import {TouchableOpacity,View,Text, StyleSheet} from 'react-native';

const Button = props => {

    return(
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}>
        <Text>
          {props.title}
        </Text>
      </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
  }
});

export default Button;