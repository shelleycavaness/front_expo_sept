import {StyleSheet, Text, TouchableOpacity, View,  } from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import Dommage from '../screens/DommageScreen';
import Feliciation from '../screens/FeliciationScreen';

import { NavigationContainer } from '@react-navigation/native';




export default function ActionComponent () {
  return(        
    <View style={styles.buttonContainer}>
      <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Felicitation')} 
          style={styles.button}>
        <Text style={styles.buttonText}>Je l'ai fait</Text>
      </TouchableOpacity>
           
      <TouchableOpacity 
        onPress={() => console.log('Dommage!')} 
        style={styles.button}>
        <Text style={styles.buttonText}>Je refuse</Text>
      </TouchableOpacity>      
    </View> 
    
  )
} 

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
     justifyContent: 'space-between',
    },
    button: {
      backgroundColor: "#83d499",
      padding: 10,
      margin: 5,
      borderRadius: 5,
      width: 100,
      alignItems: 'center',
      borderColor: "white",
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
    }, 
  
  });
  