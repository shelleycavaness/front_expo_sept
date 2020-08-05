import  React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '../components/StyledText';
import data from '../db.json'
import { allImages, frog, abeille, vinegar, velo, reparer,veggie, paille, stopPub, douche, ampule, fillet } from "../assets/";

export default function({ route }) {
  const [detail, setDetail] = useState(
    data.actions
   );

  const { itemId } = route.params;

  const detailTtile =detail[itemId].title
  const detailDone =detail[itemId].completed
  const detailPoint =detail[itemId].points
  const detailDescription =detail[itemId].description
  const detailPhoto = detail[itemId].photo
  console.log('itemId : detail ---------------', itemId)

console.log('detailDone :>> ', detailDone);
// let result = actions.findIndex(x => x.id === 5);
// console.log('==========================id', result)
  return(
    <View style={styles.container}>
     <View style={styles.card}>

      <View style={styles.cardHeader}>
        <Text style={styles.title}>{detailTtile}</Text> 
      </View>
       <Image style={styles.image} 
        source={allImages[detailPhoto]}
        // source={'../assets/images/abeille.jpeg'}
      />
       <View style={styles.separator}/>
       <View style={styles.footer}>
         <View style={styles.contentContainer}>   
            <View style={styles.contentBox}>         
              <Text style={styles.contentSectionText}>{ detailTtile }</Text>       
            </View>    
            <View style={styles.contentBox}>         
              <Text style={styles.contentSectionText}>{ detailDescription }</Text>    
  
            </View>  
            <View style={styles.contentBox}>         
              <Text style={styles.contentSectionText}>{ detailPoint } points</Text>       
            </View>    
          </View> 
          
 
       </View> 
      
     </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // marginTop:1,
    paddingHorizontal: 17,
    backgroundColor:"#1E6E6",

    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: 10
  },
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2,
      
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    // backgroundColor:"#E6E6",
    backgroundColor:"white",

  },
  cardHeader: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  
   
  },
  title:{
    color: "#51624F",
    fontSize:19,
    fontWeight: '600',
    flexWrap: 'wrap',
    paddingBottom: 25,
  },
  image:{
    // width: 200,
    height: 300,
    flex: 1,
    borderRadius: 3,
  },
  separator: {
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  footer:{
    flexDirection: 'row',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,

  },
  contentContainer: {
    flex: 1,
    paddingTop: 12.5,
    paddingBottom: 25,
    borderColor: '#51624F',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 5,
  }, 
  contentBox: {
    justifyContent: 'space-evenly', 
    paddingTop: 15,
    paddingBottom: 5,
    // alignSelf: 'center',
    flex: 1,
    alignItems: 'right',
    marginLeft: 14,
    marginRight: 10,
  },
  contentSectionText: {
    color: "#51624F",
    fontSize:18,
    justifyContent: 'center',

  },
})

