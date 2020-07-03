import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '../components/StyledText';
import data from '../db.json'
// import  ActionComponent  from '../components/ActionComponent'


export default function HomeScreen({ navigation }) {
  let id = Math.floor(Math.random() * 4) + 1 ;
  return (
      <ScrollView style={styles.scrollContainer} >
        <View style={styles.container}>
          <Text style={styles.titleText}>Le defi du jour : </Text>
          <View style={styles.container2}>
            <Text style={styles.defiText}>{data.actions[id].title}</Text>
          </View>
          <Text style={styles.description}>
           {data.actions[id].description} 
          </Text>
          <Text style={styles.description}>
          points gagnes : 
          </Text>
          <Text style={styles.points}>
           {data.actions[id].points}
          </Text>
          <Image
            source={{uri : data.actions[id].thumbnailUrl}}
            style={styles.Image}
          />
          {/* <ActionComponent /> */}
          <View style={styles.buttonContainer}>
             <TouchableOpacity 
                onPress={() => navigation.navigate('Felicitation')} 
                style={styles.button}>
                <Text style={styles.buttonText}>Je l'ai fait</Text>
             </TouchableOpacity>
                      
             <TouchableOpacity 
               onPress={() => navigation.navigate('Dommage')} 
               style={styles.button2}>
              <Text style={styles.buttonText}>Je refuse</Text>
             </TouchableOpacity>      
              </View> 
        </View>
      </ScrollView>

  );
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  scrollContainer:{
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e8f7d7'
  },
  titleText: {
    fontSize:32,
    fontWeight: '600',
    color: '#8a888c',
  },
  container2: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
    marginTop:10,
    marginBottom:10,
  },
  description:{
    fontSize:18,
    textAlign:'center',
    marginTop:10,
    color: '#8a888c',
    
  },
  defiText: {
    fontSize:18,
    fontWeight: '600',
    color: '#228B22',
    marginTop:10,
  },
  Image: {
    width:200,
    height:200,
    justifyContent: 'center',
    marginBottom:10,
    marginTop:30,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "white",
  },
  defiText: {
    fontSize:18,
    fontWeight: '600',
    color: '#228B22',
    marginTop:10,
  },
  points:{
    fontSize:18,
    fontWeight: '600',
    color: '#228B22',
    marginTop:10,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
   justifyContent: 'space-between',
   marginTop:30,
   marginBottom:20,
  },
  button: {
    backgroundColor: "#83d499",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    margin:30,
  },
  button2: {
    backgroundColor: "#f46049",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    margin:30,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  } 

});
