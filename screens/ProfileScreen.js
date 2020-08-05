import * as React from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import data from '../db.json'


export default function ProfileScreen(){
//the random is called at the beginning of the lifecyle, not with the navigation
  // let id = Math.floor(Math.random() * 4) + 1;
  // id = id - 1
  let id = 2
  console.log('id player :', id)
  return(
   <View  style={styles.container} >
     <ScrollView  style={styles.container} contentContainerStyle={styles.contentContainer} >
     <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image style={styles.avatar} source={{uri:  data.players[id].photo}}/>
          <Text style={styles.name}>
         {data.players[id].name}
          </Text>
          <Text style={styles.name}> user name:
         {" "+data.players[id].username}
          </Text>
        </View>
    </View> 
    <View style={styles.profileDetail}>
      <View style={styles.detailContent}>
        <Text style={styles.title}>Score</Text>
        <Text style={styles.count}>{data.players[id].score}</Text>
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.title}>Lieu</Text>
        <Text style={styles.count}>{data.players[id].city} </Text>
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.title}>email</Text>
        <Text style={styles.count}>{data.players[id].email}</Text>
      </View>
    </View>
    <View >
      <View style={styles.detailContent}>
        <Text style={styles.title}>Ecological Footprint Indicator</Text>
        <Text style={styles.count}>{data.players[id].score}</Text>
      </View>
      <View style={styles.detailContent}>
        <Text style={styles.title}>Bilan carbone, tonnes de CO2 Compensés</Text>
        <Text style={styles.count}>{data.players[id].score} </Text>
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
    headerContent:{
      padding:30,
      alignItems: 'center',    
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
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

    },
    detailContent:{
      margin:10,
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