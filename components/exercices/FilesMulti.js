import * as React from 'react'
import { View, StyleSheet, Alert } from 'react-native'

import BtnCustom from '../BtnCustom'

export default function FileMulti() {
	return (
		<View style={styles.container}>
    		<BtnCustom propText='Say Hello' />
    	</View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	    justifyContent: 'center'
	}
});
