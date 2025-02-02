import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { CurrentUserContext } from '../contexts/currentUserContext';
import data from '../db.json'
import { allImages } from "../assets/";
import Colors from '../constants/Colors';
import * as Svg from 'react-native-svg';
import { CurrentUserContext } from '../contexts/currentUserContext'
import waterPNG from '../assets/images/icons/icons8-water-50.png'
import co2PNG from '../assets/images/icons/icons8-co2-50.png'
import wattsPNG from '../assets/images/icons/icons8-renewable-energy-50.png'

export default function ProfileScreen( { navigation }){
  let id = 2
  const { currentPlayer } = useContext(CurrentUserContext)
  // const [playerList, setPlayerList] = useState([]);
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
                source={ co2PNG }
                />
              
              <Text style={styles.title}>{currentPlayer.playerStats && currentPlayer.playerStats.co2Saved } CO2 </Text> 
            </View>
            <View style={styles.iconBox}> 
              <Image 
                style={styles.icon}
                source={ wattsPNG }
                />
            {currentPlayer && console.log('currentPlayer', currentPlayer)}
              <Text style={styles.title}>{ currentPlayer.playerStats && currentPlayer.playerStats.kwSaved } kwatts </Text> 
            </View>
            <View style={styles.iconBox}> 
              <Image 
                style={styles.icon}
                source={ waterPNG }
                />
              <Text style={styles.title}>{ currentPlayer.playerStats && currentPlayer.playerStats.h2OSaved }litres</Text> 
            </View>
       </View>
       <View style={styles.detailBox}>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Player's Score : </Text>
          <Text style={styles.count}>{ 
            currentPlayer.playerStats && currentPlayer.playerStats.cumulatedScore
            }</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Total number of actions : </Text >
          <Text style={styles.count}> {
            currentPlayer.playerStats && currentPlayer.playerStats.numberOfActionsDone
            }
           </Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}> Potenial Score:  </Text>
          <Text style={styles.count}>  { 
            currentPlayer.playerStats && currentPlayer.playerStats.potentialScore 
            }  </Text>
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
    },
    headerImgBlock :{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // paddingBottom: 10,
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
      fontWeight:'800',
      fontFamily: "montserrat",
    },
    headerContent:{
      padding: 10,
  
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
      fontFamily: "montserrat",
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
      backgroundColor: 'white',
      borderColor: Colors.silver,
      borderWidth: 1,
      borderStyle: 'solid',
      paddingTop: 15,
      borderRadius: 12,
      width: 80,
      height:80,

    },
    icon: {
      height:50,
      width: 50,
      borderRadius: 8,
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
      color: "grey",
      fontFamily: "montserrat",
    },
    count:{
      fontSize:18,
      color: "white",
      fontFamily: "montserrat",
      fontWeight:'500',
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