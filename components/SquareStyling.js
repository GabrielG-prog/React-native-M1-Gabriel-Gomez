import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function SquareStyling({propColor, propText})  { 
  return (
    <View style={[{backgroundColor: propColor}, styles.container]}>
      <Text>{propText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  	height:100, 
  	width:100,
  	justifyContent: 'center',
  	alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  }
})
