import * as React from 'react'
import { StyleSheet, View, Text} from 'react-native'

export default function HelloWorld() {
  return (
    <View style={styles.container}>
    	<View style={styles.firstContainer}>
    		<Text>Hello World</Text>
    	</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  	 flex: 1, 
  	 backgroundColor: '#fff'
  },
  firstContainer: {
  	 height: 100, 
  	 width: 100, 
  	 backgroundColor: 'cyan',
     justifyContent: 'center',
     alignItems: 'center'
  }
})
