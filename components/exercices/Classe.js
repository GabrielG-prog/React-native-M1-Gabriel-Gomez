import * as React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

export default class Classe extends React.Component {
	state = {
    	compteur: 0
  	}

  	eventCompteur = () => {
		this.setState({compteur : this.state.compteur + 1})
	};

	render() {
		return (
			<View style={styles.container}>
		        <View style={styles.countContainer}>
		        	<Text>Compteur: {this.state.compteur}</Text>
		        </View>
		        <Button
		        	style={styles.button}
				  	onPress={this.eventCompteur}
				  	title="Compteur" />
		    </View>
		)
	}
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

