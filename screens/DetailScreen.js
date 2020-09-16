import  React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '../components/StyledText';
// import data from '../db.json'
import { allImages, frog, abeille, vinegar, velo, reparer,veggie, paille, stopPub, douche, ampule, fillet } from "../assets/";

export default function DetailScreen({ route, navigation }) {
  // const [detail, setDetail] = useState(
  //   data.actions
  //  );

  const { itemId } = route.params;
  const detailTtile = itemId.actionName
  // const detailTtile =detail[itemId].title
  // const detailDone =detail[itemId].completed
  // const detailPoint =detail[itemId].points
  const detailDescription = itemId.actionDescription
   const detailPoint =itemId.actionPoint
   const actionCo2 = itemId.actionCo2

  // const detailPhoto = detail[itemId].photo
   const detailPhoto = itemId.actionImg
  // console.log('itemId : detail ---------------', itemId)

// console.log('detailDone :>> ', detailDone);
// let result = actions.findIndex(x => x.id === 5);
// console.log('==========================id', result)
const pressHandler = async (action) => {
  navigation.navigate("Felicitation", {
    propsItem: itemId,
    // newScore: newScore,
  });
}
  return(
    <View style={styles.container}>
     <View style={styles.card}>

        <View style={styles.cardHeader}>
          <Text style={styles.title}>{detailTtile}</Text> 
          <Image style={styles.cardImage} 
          source={allImages[detailPhoto]}
        // source={'../assets/images/abeille.jpeg'}
          />
        </View>
        
        <View style={styles.separator}/>
        <View style={styles.footer}>
          <View style={styles.contentContainer}>   
            <View style={styles.contentBox}>         
              <Text style={styles.contentSectionText}>{ `you saved ${actionCo2} tones co2` }</Text>       
            </View>    
            <View style={styles.contentBox}>         
              <Text style={styles.contentSectionText}>{ detailPoint } points</Text>       
            </View>        
            <Text style={styles.detailSectionText}>{ detailDescription }</Text>    
          </View> 
       </View> 
       <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => pressHandler()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Lorem lorem</Text>
          </TouchableOpacity>
      </View>  
     </View> 
 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // marginTop:1,
    // paddingHorizontal: 17,
    // backgroundColor:"#FFF",
    // alignItems: 'center', 
  },
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2, 
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // marginVertical: 8,
    // backgroundColor:"#E6E6",
    backgroundColor:"white",

  },
  cardHeader: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flex: 1,
    flexDirection: 'collumn',
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
  cardImage:{
    // width: 200,
    height: 200,
    width:null, 
    borderRadius: 8,
  },
  separator: {
    marginTop: 10,
  },
  footer:{
    flexDirection: 'row',
    paddingTop: 12.5,
    // paddingBottom: 15,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,

  },
  contentContainer: {
    flex: 1,
    padding:5,
    alignItems: 'center',
    borderRadius: 5,
  }, 
  contentBox: {
  },
  contentSectionText: {
    color: "#51624F",
    fontSize:18,
    justifyContent: 'center',
    paddingTop: 5,
  },
  detailSectionText: {
    color: "#51624F",
    fontSize:15,
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#d2d2d2",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    margin: 5,
    borderColor: "#FCF4A3",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
    color: "#FCF4A3",
  },
})

