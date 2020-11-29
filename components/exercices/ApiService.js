import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

export default class ApiService extends Component {
 
  state = {
    data: []
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=100&inc=name')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.results });
      })
      .catch((error) => console.error(error))
  }
  
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.name.title} {item.name.first} {item.name.last}</Text>
          )} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  }
})
