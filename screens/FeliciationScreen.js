            
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

export default function FeliciationScreen({ navigation, route }) {
  // const { propsItem } = route.params;
  // console.log('coucou :>> ', propsItem);
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
      <Image 
       style={styles.photo} 
       source={{uri : tiger}}
      //  source={require('../assets/images/tigre_heureux.jpg')}
       />
          <Text style={styles.companyName}>Felicitation !!!</Text>
          <Text style={styles.slogan}> Rendez-vous demain!</Text>
          <View style={styles.descriptionContent}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, altera conceptam ei cum. Hinc temporibus repudiandae eu mel, cum impetus legendos ei. 
              Fugit everti dissentias duo cu, nihil fabellas id pri, nonumy verear ea pri. Sit et nisl eros. Ad sapientem forensibus est, 
              ne vis sonet iuvaret, his sint fabulas dolores ad. Repudiare gubergren voluptatum ius ne, nec nostro possim nostrud ad, 
            </Text>
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
  photo:{
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
  }
}); 