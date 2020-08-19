import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native';
import {frog, userWo, user} from '../assets/index';
import ProfileScreen from '../screens/ProfileScreen'
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Header( { navigation, route } ) {
  // const navigation = useNavigation();

  const pressHandler = () => {
    console.log("I have been clicked :>> ");
  //  return navigation.navigate("Profile")
  }
  return(
    <View style={styles.header}>

     <Image   
      source={{uri : frog}}
      style={styles.image}
     />
      <TouchableOpacity
       onPress={() => pressHandler() }
      //  onPress={() => navigation.navigate("Profile") }
      >
          <Image   
          source={{uri : userWo}}
          style={styles.image}
        />
     </TouchableOpacity>
    
    </View>
   
  )
}


const styles = StyleSheet.create({
 header : {
  width :'100%',
  height: '100%',
  flexDirection: 'row',
  // alignItems: 'center',
  justifyContent: 'space-between'
 },
 headerText:{
   fontWeight: 'bold',
   fontSize: 20,
   color: '#333',
   letterSpacing: 1
 },
 image: {
  width: 40,
  height: 40
 }

})