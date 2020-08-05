            
import React from 'react';
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

export default function FelicitationScreen({ navigation, route }) {
 const { propsItem } = route.params;
 const defiTitle = propsItem.title;
 const defiDescript = propsItem.description;
 const defipoint = propsItem.points;
 const defiCO2 = propsItem.co2;
//  const defiImg = allImages[data.actions[id].photo]


  console.log('coucou :>> ', propsItem);
  console.log('$$$$$$$$$$$$$$$$$$defiTitle', defiTitle)
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
        <View style={styles.header}>         
         <Text style={styles.contentSectionText}>{defiTitle}</Text>       
        </View>   
        <Image 
       style={styles.photo} 
       source={{uri : tiger}}
      //  source={require('../assets/images/tigre_heureux.jpg')}
       />
          <Text style={styles.companyName}>Felicitation !!!</Text>
        
          <View style={styles.descriptionContent}>
         
            <Text style={styles.description}>
              you saved : {defiCO2} tones of carbon !!
            </Text>
            <Text style={styles.description}>
              you earned : {defipoint} game points.  
            </Text>
              
          </View>
          <View style={styles.separator}/>
       <View style={styles.footer}>
         <View style={styles.contentContainer}>   
            <View style={styles.contentBox}>         
              <Text style={styles.contentSectionText}>{defiDescript}</Text>       
            </View>     
            <Text style={styles.slogan}> Rendez-vous demain!</Text> 
          </View>
        </View> 
          <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Go  back</Text>
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
  header: {
    color: "#51624F",
    fontSize:29,
    fontWeight: '600',
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
  companyName: {
    fontSize:32,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  slogan:{
    fontSize:18,
    fontWeight: '600',
    color: '#228B22',
    marginTop:10,
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
    alignItems: 'right',
    marginLeft: 14,
    marginRight: 10,
  },
  contentSectionText: {
    color: "#FFF",
    fontSize:18,
    justifyContent: 'center',

  },
}); 