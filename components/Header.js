import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native';
import {frog, userWo, user, logo} from '../assets/index';
import { useNavigation  } from '@react-navigation/native';
export default function Header({ Profile }) {
  const navigation = useNavigation();
  return(
    <View style={styles.header}>

     <Image   
      source={{uri : logo}}
     style={styles.image}
    //  style={styles.logo}

     />
    <View  >
      <Text style={styles.title}>Mon Eco-Défi</Text>
    </View>
      <TouchableOpacity
       onPress={() => navigation.navigate('Profile')}
      >
        <Image   
          source={{uri : userWo}}
         style={styles.image}
        //  style={styles.user}

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
 title:{
  fontSize: 18,
  color: 'grey',
  fontFamily: "montserrat",
  fontWeight: 'bold',

}, 
 image: {
  width: 40,
  height: 40
 },
//  logo: {
//    width: 200,
//    height: 40
//  },
//  user: {
//   width:40,
//   height: 40
// },

})