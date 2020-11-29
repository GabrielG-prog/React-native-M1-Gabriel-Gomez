import * as React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native'

export default function BtnCustom({ propText }) {
  const eventPress = () => {
    Alert.alert('Click')
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => eventPress({propText})}>
        <Text>{propText}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  }
})
