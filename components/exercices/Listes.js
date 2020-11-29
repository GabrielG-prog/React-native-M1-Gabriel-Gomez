import * as React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'

export default function Liste() {

  const nameData = [
   { id:1, name:"Paul" }, { id:2, name:"Luc" },
   { id:3, name:"Leo" }, { id:4, name:"Marc" },
   { id:5, name:"Jim" }, { id:6, name:"Tom" },
   { id:7, name:"John" }, { id:8, name:"Mike" },
   { id:9, name:"Jose" }, { id:10, name:"Tim" },
   { id:11, name:"Jack" }, { id:12, name:"Joe" },
   { id:13, name:"Ludo" }, { id:14, name:"Nico" },
   { id:15, name:"Alex" }, { id:16, name:"Sam" },
   { id:17, name:"Ben" }, { id:18, name:"Roy" },
   { id:19, name:"Bob" }, { id:20, name:"Matt" }
]

  return (
    <View style={styles.container}>
      <FlatList
        data={nameData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
