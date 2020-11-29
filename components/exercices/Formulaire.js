import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'

export default function Formulaire() {
  
  const [value, onChangeText] = useState('What is your name ?');

  return (
    <View style={styles.container}>
		<TextInput
	      style={styles.textInput}
	      onChangeText={text => onChangeText(text)}
	      value={value}
	    />
	    <Button
	    	title="Say Hello"
	        onPress={() => Alert.alert(value)}
	    />
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
    	flex: 1,
    	justifyContent: 'center'
  	},
	textInput: {
		height: 40, 
		borderColor: 'gray', 
		borderWidth: 1,
	}
})
