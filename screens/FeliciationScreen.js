            
import React, {useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {  congrats, tiger } from "../assets/index";
import { CurrentUserContext } from '../contexts/currentUserContext'


export default function FelicitationScreen({ navigation, route }) {
 const { propsItem } = route.params;
//  const { newScore } = route.params;
//  console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ${newScore}   newScore :>> `, newScore  );
//  console.log('propsItem', propsItem)
 const defiTitle = propsItem.actionName;
 const defiDescript = propsItem.actionDescription;
 const defipoint = propsItem.actionPoint;
 const defiCO2 = propsItem.actionCo2;
 const { currentPlayer } = useContext(CurrentUserContext)

 useEffect(() => {
 }, [currentPlayer])
//  (typeof defiCO2 !== 'undefined') ? defiCO2 : 2018;
//  const defiImg = allImages[data.actions[id].photo]
    return (
      <ScrollView style={styles.scrollContainer}>
       <View style={styles.container}>
         <View style={styles.header}>  
         
          <Text style={styles.slogan}> your new score is: {currentPlayer.playerStats.cumulatedScore}. Rendez-vous demain!</Text>       
        </View>   
        <Image 
          style={styles.photo} 
          source={{uri : tiger}}
        />
        <Text style={styles.sloganName}>Felicitation !!!</Text>       
        <View style={styles.descriptionContent}>
         <Text style={styles.description}>
           you saved : {defiCO2} tones of carbon !!
         </Text>
         <Text style={styles.description}>
           you earned : {defipoint} game points.  
          </Text>   
        </View>
 
        <View style={styles.footer}>
     
         <View style={styles.contentContainer}>   
         <Text style={styles.contentSectionText}>{defiTitle}</Text> 
          <View style={styles.contentBox}>     
            {/* <View style={styles.separator}/>        */}
              <Text style={styles.contentSectionText}>{defiDescript}</Text>       
            </View>     
            
          </View>
        </View> 
          <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Je confirme</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  
}

const styles = StyleSheet.create({
  scrollContainer:{
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#a4dbca',
  },
 
  photo: {
    width:200,
    height:200,
    justifyContent: 'center',
    marginBottom:10,
    marginTop:30,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: "white",
  },
  sloganName: {
    fontSize:32,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  slogan:{
    fontSize:18,
    fontWeight: '600',
    color: '#228B22',
    margin:10,
    textAlign:'center',
  },
  descriptionContent:{
    padding:30
  },
  description:{
    fontSize:18,
    textAlign:'center',
    marginTop:10,
    color: '#FFFFFF',
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
  },
  sendButton: {
    backgroundColor: "#FFFFFF",
  },
  buttonText: {
    color: '#EE82EE',
  },
  separator: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#FFF',
    borderWidth: 1,
    borderStyle: 'dotted',
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
    borderColor: '#FFF',
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
  },
  contentSectionText: {
    color: "#FFF",
    fontSize:18,
    justifyContent: 'center',

  },
}); 