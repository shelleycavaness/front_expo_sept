import React, {useState, useLayoutEffect, useEffect} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '../components/StyledText';
import data from '../db.json'
// import  ActionComponent  from '../components/ActionComponent'
import { allImages } from "../assets/";


export default function HomeScreen({ navigation }) {
  let id = Math.floor(Math.random() * 4) + 1 ;
  // let id = 1
  let playerId = 1
  const [actionList, setActionsList] = useState([]);
  const [action, setAction] = useState({})
  const [playerInfo, setPlayerInfo] = useState([]);
  // const item = data.actions[id];

  useEffect(()=>{
    fetch( "https://docker-nestjs-my-eco-defi.apps.ocp.lab-nxtit.com/api/v1/actions")
      //  fetch('http://localhost:9999/api/v1/actions')
     .then((response) => response.json())
     .then((responseJson) => setActionsList(Object.values(responseJson)))
     .catch((error) => console.error('error in catch ----------',error))
     
  }, [])
  useEffect(()=>{
    fetch( "https://docker-nestjs-my-eco-defi.apps.ocp.lab-nxtit.com/api/v1/players/"+playerId)
      //  fetch('http://localhost:9999/api/v1/actions')
     .then((response) => response.json())
     .then((responseJson) => setPlayerInfo(Object.values(responseJson)))
     .catch((error) => console.error('error in catch ----------',error))
     
  }, [])

 playerInfo && playerInfo.length? console.log("player>>>>>>>>>>>>>", playerInfo) : console.log('no id')
//   actionList && actionList.length? console.log("item>>>>>>>>>>>>>", item) : console.log('no object here')
  // console.log("9999999999999999999999999",action)

  const pressHandler =  (action) => {
    console.log('I have been clicked :>> ', action);
    console.log('actionList.length :>> ', actionList);
     setActionObj(),
    navigation.navigate('Felicitation',
    {propsItem: actionList[id],
      newScore : 300,
      // newScore: playerInfo[id].score + actionList[id].actionPoint
    }, 
    )};
   const setActionObj = () => {
     if(actionList && actionList.length){ 
       setAction(actionList[id]);
      console.log('action :>> ', action);}
    }
  return (
    <ScrollView style={styles.scrollContainer} >
      <View style={styles.container}>
          <Text style={styles.titleText}>Le defi du jour : </Text>
          <View style={styles.container2}>
            {
              actionList && actionList.length > 0 ?
              <Text style={styles.defiText}>{ actionList[id].actionName }</Text> : 
              <Text style={styles.defiText}>{ 'defiTitle' }</Text>
            }
          </View>
           {
            actionList && actionList.length > 0 ?
            <Text style={styles.description}>{ actionList[id].actionDescription } </Text> :
            <Text style={styles.description}>{ 'defiDescript' } </Text>
           }
          
          <Text style={styles.description}>points gagnes :</Text>
           {
            actionList && actionList.length > 0 ?
            <Text style={styles.points}> { actionList[id].actionPoint }</Text> :
            <Text style={styles.points}>{ 'defipoint' } </Text>
           }  
        <View style={styles.container3}>
            {
              actionList && actionList.length > 0 ?
              <Text style={styles.description}>Tonnes de CO2 Compensés maintenant : {" "+ actionList[id].actionCo2}</Text> :
              <Text style={styles.points}>{ 'defipoint' } </Text>
            }
        </View>
          {
            actionList && actionList.length > 0 ?
            <Image style={styles.Image}source={allImages[actionList[id].actionImg]}></Image> :
            <Text>no image</Text>
          }
        <View style={styles.buttonContainer}>
             <TouchableOpacity 
                // onPress={() => pressHandler(item)} 
                // onPress={() => pressHandler(id)} 

                onPress={() => pressHandler(action)} 
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
    // backgroundColor: '#FFF',
    borderRadius: 3,
    paddingHorizontal: 4,
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    // textAlign:'center',
    // borderColor: 'red',
    // borderWidth: 5,
    // borderStyle: 'dotted',
  },
  description:{
    fontSize:18,
    marginTop:10,
    color: '#8a888c',
    textAlign:'center',
  
  },
  defiText: {
    fontSize:18,
    fontWeight: '600',
    color: '#228B22',
    marginTop:10,
    padding:30,
    textAlign:'center',
    borderColor: 'black',
    borderWidth: 5,
    borderStyle: 'solid',
  },
  container3: {
    backgroundColor: '#FFF',
    borderRadius: 3,
    paddingHorizontal: 4,
    
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
