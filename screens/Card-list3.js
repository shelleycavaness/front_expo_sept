
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
// import ListView from 'deprecated-react-native-listview'
import { abeille, vinegar, velo, reparer,veggie, paille, stopPub, douche, ampule, fillet } from "../assets";
import data1 from '../db.json'

export default function UsersView() {
    const [actionList, setActions] = useState(
      data1.actions
   );

    return (
      <ScrollView style={styles.container}>
      <Text style={styles.title}>Liste des defis</Text> 
       <View style={styles.body}>
        <FlatList style={styles.container} 
          keyExtractor={ (item) => item.id.toString() }
          // keyExtractor={ (item) => item.key }
          data={ actionList }
          renderItem={ ({ item }) =>(
            <TouchableOpacity>     
            <View style={styles.box}>
              <Image style={styles.image} 
               source={ item.thumbnailUrl} 
              /> 
    {   console.log('==================', item.thumbnailUrl)}
    {   console.log('*********************', item.image)}
              <Text style={styles.title}>{item.title}</Text> 
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: "https://img.icons8.com/material-two-tone/24/000000/plus.png"}}/>
              </View> 
            </View>
          </TouchableOpacity>
          )}

                />
       </View>
      </ScrollView>
    );
 
}

const styles = StyleSheet.create({
  image:{
    width: 60,
    height: 60,
  },
  body: {
    padding:30,
    backgroundColor :"#E6E6FA",
  },
  box: {
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  title:{
    color: "#20B2AA",
    fontSize:18,
    alignSelf:'center',
    marginLeft:10
  },
  iconContent:{
    width: 60,
    height: 60,
    backgroundColor: '#40E0D0',
    marginLeft: 'auto',
    alignItems: 'center'
  },
  icon:{
    width: 40,
    height: 40,
  }
});
 

///////////////////////////////
//  const [actionList, setActions] = useState([
//        {key: '0', image: vinegar, title:"johndoe1"},
//        {key: '1', image: velo, title:"johndoe2"},
//        {key: '2', image: fillet, title:"johndoe3"},
//        {key: '3', image: ampule , title:"johndoe4"},
//        {key: '4', image: stopPub, title:"johndoe5"},
//        {key: '5', image: douche, title:"johndoe6"},
//        {key: '6', image: paille, title:"johndoe7"},
//        {key: '7', image: veggie, title:"johndoe8"},
//        {key: '8', image: abeille, title:"johndoe10"},
//        {key: '9', image: vinegar, title:"johndoe11"},
//        {key: '10', image: velo, title:"johndoe12"},
//        {key: '12', image: fillet, title:"johndoe13"},
//        {key: '13', image: ampule , title:"johndoe14"},
//     ]);