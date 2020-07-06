import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native';
import {frog} from '../assets/index'

export default function Header() {
  return(
    <View style={styles.header}>

     <Image   
      source={{uri : frog}}
      style={styles.image}
     />
     {/* <View>
       <Text style={styles.headerText}>yep</Text>
     </View> */}
    </View>
   
  )
}


const styles = StyleSheet.create({
 header : {
  width :'100%',
  height: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
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