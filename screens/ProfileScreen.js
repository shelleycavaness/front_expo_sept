import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { CurrentUserContext } from '../contexts/currentUserContext';
import data from '../db.json'
import { allImages } from "../assets/";
import Colors from '../constants/Colors';
import * as Svg from 'react-native-svg';

export default function ProfileScreen( { navigation }){
  let id = 2
  
  const [playerList, setPlayerList] = useState([]);
  const [player, setPlayer] = useState({});
  const setPlayerObj = () => {
    if (playerList && playerList.length>0) {
      setPlayer(playerList[2]);
      console.log("playerlist setter :******************************>> ", player.playerStats);
      // console.log(' players[0].playerStats :>> ',  players[0].playerStats);
      }
     };
    //  setPlayerObj()
  useEffect (() => {
   console.log('Our component  did mount')  
   fetch('http://localhost:9999/api/v1/players/')
  // fetch( "https://docker-nestjs-my-eco-defi.apps.ocp.lab-nxtit.com/api/v1/players")
   .then((response) => response.json())
  // .then((responseJson) => console.log('responseJson>>>>>>>>>>>>>>>>>', responseJson))
   .then((responseJson) => setPlayerList(Object.values(responseJson)))
   .catch((error) => console.error('error in catch ----------',error))
    }, [])



    //  playerList && setPlayerList.length > 0 ? console.log('object data finally arrived  ', playerList[0]) : console.log('oh no Empty') 
  // const {currentPlayer} = useContext(CurrentUserContext)
  // console.log('currentPlayer8888888888888888888888888888888888888888888', currentPlayer)

  return(

   <ScrollView  style={styles.container} contentContainerStyle={styles.contentContainer} >
    <View style={styles.header}>
     <View style={styles.headerImgBlock}> 
       <Image 
         style={styles.avatar} 
         source={allImages.userWo}
         />
          {
            playerList && playerList.length > 0 ? 
           <Text style={styles.name}> { playerList[0].lastName } </Text> :
           <span>not ready</span>
          }
          {
            playerList && playerList.length > 0 ? 
           <Text style={styles.name}> { playerList[0].firstName } </Text> :
           <span>not ready</span>
          }
        </View>  
        <View style={styles.headerContent}> 
         
          <View style={styles.headerDetail}>
            <Text style={styles.title}>Lieu : </Text>
            {
              playerList && playerList.length > 0 ? 
              <Text style={styles.count}>{ playerList[0].location }  </Text> : 
              <span>not ready</span>
            }
          </View>
          <View style={styles.headerDetail}>
            <Text style={styles.title}>Email : </Text>
            {
              playerList && playerList.length > 0 ? 
              <Text style={styles.count}>{ playerList[0].email } finally </Text> : 
              <span>not ready</span>
            }
          </View>
        </View>
    </View> 
    <View  style={styles.sectionWrapper}>
    <Text style={styles.sectionTitle}>Impact Total </Text>
    <View style={styles.iconBoxWrapper}> 
      <View style={styles.iconBox}> 
        <Image 
          style={styles.icon}
          source={allImages.watts}
          />
         {
         playerList && playerList.length > 0 ? 
         <Text style={styles.title}>{ playerList[0].playerStats.cumulatedScore } CO2 </Text> : 
         <span>0</span>
        }
      </View>
      <View style={styles.iconBox}> 
        <Image 
          style={styles.icon}
          source={allImages.watts}
          />
        {
         playerList && playerList.length > 0 ? 
         <Text style={styles.title}>{ playerList[0].playerStats.cumulatedScore } littres</Text> : 
         <span>0</span>
        }
      </View>
      <View style={styles.iconBox}> 
        <Image 
          style={styles.icon}
          source={allImages.watts}
          />
        {
         playerList && playerList.length > 0 ? 
         <Text style={styles.title}>{ playerList[0].playerStats.cumulatedScore }kwatts</Text> : 
         <span>0</span>
        }
         
      </View>
      
      </View>
       <View style={styles.detailBox}>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Score : </Text>
          <Text style={styles.count}>{data.players[id].score}</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Ecological Footprint Indicator : <Text style={styles.count}> {data.players[id].score}
          </Text > </Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Tonnes de CO2 Compensés 
          { playerList && playerList.length > 0 ?  playerList[0].playerStats.Co2  : "42"
          }</Text>
        </View>
      </View>
   </View>
  </ScrollView>  


  )  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
    },
    contentContainer: {
        },
      
    header:{
      flex: 1,
      padding: 20,
      backgroundColor: Colors.Turquoise2,// '#e3e3e8',   

      // alignItems: 'center',  
      paddingBottom: 30,
    },
    headerImgBlock :{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 10,
    },
   
    avatar: {
      width: 90,
      height: 90,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "black",
      // marginBottom:10,
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
      fontFamily: "Roboto",
    },
    headerContent:{
      padding: 20,
  
    },
    sectionWrapper: {
          // flexDirection: 'column',
      // alignItems:'center',    
      backgroundColor:  '#e3e3e8',  
      borderTopColor:  Colors.silver,
      borderTopWidth: 1,
    },
    sectionTitle:{
      paddingLeft: 40,
      fontSize:18,
      color: "#FFFFFF",
      fontFamily: "Roboto",
    },
    iconBoxWrapper: {
     
      flexDirection: 'row', 
      justifyContent: 'space-around',
      padding: 20,
      paddingLeft: 40,
      paddingRight:40,
      
    },
    iconBox: {
      alignItems: 'center', 
      borderColor: Colors.silver,
      borderWidth: 1,
      borderStyle: 'solid',
      padding: 20,
      borderRadius: 12,
      width: 100,
      
    },
    icon: {
      height: 30,
      width: 30,
    },
    
    detailBox:{
      backgroundColor:  '#e3e3e8',   
      padding: 20,
     
    },
    
    headerDetail:{
      margin:5,
      flexDirection: 'row',
      // justifyContent: 'flex-end',
      alignItems: 'center',
      
    },
    title:{
      fontSize:13,
      color: "#FFFFFF",
      fontFamily: "Roboto",
    },
    count:{
      fontSize:18,
      color: "white",
      fontFamily: "Roboto",
    },
    profileText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      // textAlign: 'center',
    },  
   
    detailContent:{
      margin:5,
      flexDirection: 'row',
      // justifyContent: 'flex-end',
      alignItems: 'center',
      borderBottomColor:  Colors.silver,
      borderBottomWidth: 1,
      paddingBottom: 20,
      paddingTop: 10,
      // borderStyle: 'solid',   
    },


    profileDetail:{
      // alignSelf: 'center',
      // marginTop:100,
      alignItems: 'center',
      paddingLeft: 40,
      paddingRight:40,
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