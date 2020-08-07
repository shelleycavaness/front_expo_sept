import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import data from '../db.json'

export default function ProfileScreen(){
//the random is called at the beginning of the lifecyle, not with the navigation
  // let id = Math.floor(Math.random() * 4) + 1;
  // id = id - 1
  let id = 2
  // console.log('id player :', id)
  const score = data.players[id].score
  const username = data.players[id].username
  const city = data.players[id].city
  const email = data.players[id].email
  // const firstName = data1.id
  // const lastName = data1.lastName

  const [players, setPlayers] = useState([]);
  useEffect (() => {
   console.log('Our component  did mount')  
  //  fetch('http://localhost:9999/api/v1/players')
  fetch( "https://docker-nestjs-my-eco-defi.apps.ocp.lab-nxtit.com/api/v1/players")
   .then((response) => response.json())
  // .then((responseJson) => console.log('responseJson>>>>>>>>>>>>>>>>>', responseJson))
   .then((responseJson) => setPlayers(Object.values(responseJson)))
   .catch((error) => console.error('error in catch ----------',error))
    }, [])
   players && players.length > 0 ? console.log('object data finally arrived  ', players[0]) : console.log('oh no Empty') 

  return(
  <View  style={styles.container} >
   <ScrollView  style={styles.container} contentContainerStyle={styles.contentContainer} >
     <View style={styles.header}>
     <Image style={styles.avatar} source={{uri:  data.players[id].photo}}/>
        <View style={styles.headerContent}> 
          {
            players && players.length > 0 ? 
           <Text style={styles.name}> { players[0].lastName } </Text> :
           <span>not ready</span>
          }
          {
            players && players.length > 0 ? 
           <Text style={styles.name}> { players[0].firstName } </Text> :
           <span>not ready</span>
          }
        </View>
    </View> 
    <View style={styles.profileDetail}> 
      <View style={styles.detailContent}>
        <Text style={styles.title}>Score</Text>
        <Text style={styles.count}>{data.players[id].score}</Text>
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.title}>Lieu</Text>
        {
          players && players.length > 0 ? 
          <Text style={styles.count}>{ players[0].location } finally </Text> : 
          <span>not ready</span>
        }
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.title}>email</Text>
        {
          players && players.length > 0 ? 
          <Text style={styles.count}>{ players[0].email } finally </Text> : 
          <span>not ready</span>
        }
      </View>
    </View>
    <View >
      <View style={styles.detailContent}>
        <Text style={styles.title}>Ecological Footprint Indicator</Text>
        <Text style={styles.count}>{data.players[id].score}</Text>
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.title}>Tonnes de CO2 Compensés</Text>
      </View>
    </View>
  </ScrollView>  
 </View>

  )  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: '#e3e3e8',     
    },
    contentContainer: {
      paddingTop: 30,
      alignItems: 'center',
        },
    profileText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },    
    header:{
      flex: 1,
      alignItems: 'center',  
    
    },
    headerContent:{
      padding:30,
      alignItems: 'center',    
      flexDirection: 'row',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      // marginBottom:10,
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    profileDetail:{
      // alignSelf: 'center',
      // marginTop:100,
      alignItems: 'center',
      // flexDirection: 'row',
      // position:'absolute',
      paddingLeft: 40,
      paddingRight:40,
      // borderColor: 'red',
      // borderWidth: 5,
      // borderStyle: 'dotted',
    },
    detailContent:{
      margin:5,
      alignItems: 'center'
    },
    title:{
      fontSize:20,
      color: "#00CED1"
    },
    count:{
      fontSize:18,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
      marginTop:40
    },
    textInfo:{
      fontSize:18,
      marginTop:20,
      color: "#696969",
    }
})