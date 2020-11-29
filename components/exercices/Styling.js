import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'

import SquareStyling from '../SquareStyling'

export default function Styling() {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <SquareStyling propColor="cyan" propText="Square 1" />
        <SquareStyling propColor="yellow" propText="Square 2" />
        <SquareStyling propColor="orange" propText="Square 3" />  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  firstContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  }
})
