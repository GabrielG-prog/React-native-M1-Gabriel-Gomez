import React, { useState } from 'react'
import { StyleSheet, Text, Button, View } from "react-native"

export default function StatesProps() {
  const [count, setCount] = useState(0)

  const eventPress = () => {
  	setCount(nb => nb + 1)
  } 

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>You ve pressed the button: {count} times</Text>
      </View>
      <Button
        style={styles.button}
        title="Press me"
        onPress={eventPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
})
