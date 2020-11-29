import * as React from 'react'
import { StyleSheet, View, Button, Alert } from 'react-native'

export default function CaptureTaps() {
  return (
    <View style={styles.container}>
      <Button
        title="Capture Taps"
        onPress={() => Alert.alert('Bonjour')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
