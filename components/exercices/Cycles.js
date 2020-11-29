import * as React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, Button } from 'react-native'

export default class Cycles extends React.Component {

	constructor(props) {
		console.log("Initialisation de l'état local")

	    super(props)
	    this.state = {
	    	date: new Date()
	    }
	}

	componentDidMount() {
		console.log("Component injectée dans le DOM")

		this.timerID = setInterval(
	    	() => this.tick(),
	    	1000
	   	)	 
	}

	componentWillUnmount() {
		console.log("Component retiré du DOM")

		clearInterval(this.timerID)
	}

	tick() {
    	this.setState({
      		date: new Date()
    	})
  	}

	render() {
		console.log("Rendu et mise a jour à l'écran")
		return (
			<View style={styles.container}>
		    	<Text>Il est {this.state.date.toLocaleTimeString()}.</Text>
		    </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center'
	}
});
