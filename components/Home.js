import * as React from 'react';
import { StyleSheet, Text, ScrollView, FlatList } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <Text>Exercice 12+13 : Construire une liste pour les exercices</Text>
      <FlatList
        data={[
          {id:'1', title:'1 - Hello World', text:'HelloWorld'},
          {id:'2', title:'2 - Capture taps', text:'CaptureTaps'},
          {id:'3', title:'3 - Composant Custom', text:'Custom'},
          {id:'4', title:'4 - Les states et les props', text:'StatesProps' },
          {id:'5', title:'5 - Styling avec React Native', text:'Styling'},
          {id:'6', title:'6 - Contenu Scrollable', text:'Scrollable'},
          {id:'7', title:'7 - Construire un formulaire', text:'Formulaire'},
          {id:'8', title:'8 - Liste', text:'Listes'},
          {id:'9', title:'9 - Utiliser une API / service', text:'ApiService'},
          {id:'10', title:'10 - Fichiers multiples', text:'FilesMulti'},
          {id:'11', title:'11 - Composant class', text:'Classe'},
          {id:'12', title:'12 - Lifecycle des composants', text:'Cycles'}
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Text onPress={() => navigation.navigate(item.text)} style={styles.item}>{item.title}</Text>}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  }
});
