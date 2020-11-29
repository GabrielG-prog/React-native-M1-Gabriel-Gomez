import * as React from 'react'
import { StyleSheet, View, Alert } from 'react-native'

import BtnCustom from '../BtnCustom'

export default function Custom() {
	return (
		<View style={styles.container}>
	    	<BtnCustom propText='Say Hello' />
	    	<BtnCustom propText='Say GoodBye' />
	    </View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
})
