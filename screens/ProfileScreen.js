import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { CurrentUserContext } from '../contexts/currentUserContext';
import data from '../db.json'
import { allImages } from "../assets/";
import Colors from '../constants/Colors';
import * as Svg from 'react-native-svg';
import { CurrentUserContext } from '../contexts/currentUserContext'


export default function ProfileScreen( { navigation }){
  let id = 2
  const { currentPlayer } = useContext(CurrentUserContext)

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

    }, [currentPlayer])



  return(

   <ScrollView  style={styles.container} contentContainerStyle={styles.contentContainer} >
    <View style={styles.header}>
     <View style={styles.headerImgBlock}> 
       <Image 
         style={styles.avatar} 
         source={allImages.userWo}
         />
          
           <Text style={styles.name}> { currentPlayer.lastName } </Text>
           <Text style={styles.name}> { currentPlayer.firstName } </Text> 
       
        </View>  
        <View style={styles.headerContent}> 
         
          <View style={styles.headerDetail}>
            <Text style={styles.title}>Lieu : </Text>
          
              <Text style={styles.count}>{ currentPlayer.location }  </Text>
          </View>
          <View style={styles.headerDetail}>
            <Text style={styles.title}>Email : </Text>
           
              <Text style={styles.count}>{ currentPlayer.email } </Text> 
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
         
         <Text style={styles.title}>{currentPlayer.playerStats.cumulatedScore } CO2 </Text> 
      </View>
      <View style={styles.iconBox}> 
        <Image 
          style={styles.icon}
          source={allImages.watts}
          />
       
         <Text style={styles.title}>{ currentPlayer.playerStats.potentialScore } litres</Text> 
      </View>
      <View style={styles.iconBox}> 
        <Image 
          style={styles.icon}
          source={allImages.watts}
          />
         <Text style={styles.title}>{ currentPlayer.playerStats.numberOfActionsDone }kwatts</Text> 
         
      </View>
      
      </View>
       <View style={styles.detailBox}>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Score : </Text>
          <Text style={styles.count}>{currentPlayer.playerStats.cumulatedScore}</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Ecological Footprint Indicator : <Text style={styles.count}> {currentPlayer.playerStats.numberOfActionsDone}
          </Text > </Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Tonnes de CO2 Compensés 
           { currentPlayer.playerStats.numberOfActionsDone }  </Text>
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