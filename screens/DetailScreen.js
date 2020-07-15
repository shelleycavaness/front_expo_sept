import  React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '../components/StyledText';
import data from '../db.json'
import { allImages, frog, abeille, vinegar, velo, reparer,veggie, paille, stopPub, douche, ampule, fillet } from "../assets/";

export default function({ route }) {
  const [detail, setDetails] = useState(
    data.actions
   );

  const { itemId } = route.params;

  const detailTtile =detail[itemId].title
  const detailDescription =detail[itemId].description
  const detailPhoto = detail[itemId].photo
  console.log('itemId : detail ---------------', itemId)
// console.log('detail/////////////////', detail[itemId])
// console.log('detail/////////////////', detail[itemId].id)
// console.log('detalPhoto', allImages[detailPhoto])

// let result = actions.findIndex(x => x.id === 5);
// console.log('==========================id', result)
  return(
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>ItemId: {JSON.stringify(itemId)}</Text>
      <Text> {detailTtile } </Text>
      <Text> { detailDescription} </Text>
      <Image style={styles.image} 
        source={allImages[detailPhoto]}
        // source={'../assets/images/abeille.jpeg'}
      />
        {/* <Text>ItemId: {JSON.stringify(itemId)}</Text>
        <Text>Title: {JSON.stringify(title)}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  image:{
    width: 60,
    height: 60,
  }
})