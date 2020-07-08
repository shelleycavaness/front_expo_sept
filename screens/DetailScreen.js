import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '../components/StyledText';
import data from '../db.json'
import { frog, abeille, vinegar, velo, reparer,veggie, paille, stopPub, douche, ampule, fillet } from "../assets/";

export default function() {
  // const [detail, setDetails] = useState(
  //   data1.actions
  //  );

  //const { navigation } = this.item;
  // const itemId = navigation.getParam('itemId', 'NO-ID');
  // const title = navigation.getParam('title', 'no title');

  return(
    <View style={styles.container}>
      <Text>Details Screen</Text>
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
  }
})