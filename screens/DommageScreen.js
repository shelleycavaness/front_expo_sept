            
import React, {useEffect,useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';
import { CurrentUserContext } from '../contexts/currentUserContext'

import { allImages } from "../assets/";
import Colors from '../constants/Colors';
import { dommage, velo } from "../assets";

export default function DommageScreen({ navigation, route }) {
  const { currentPlayer } = useContext(CurrentUserContext)
  const { propsItem } = route.params;
  useEffect(() => {
  }, [currentPlayer])

    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.cardHeader}>
              <Image style={styles.photo} source={{uri: dommage}}/>
              <Text style={styles.title}>Dommage !!!</Text>
              <Text style={styles.slogan}>Rendez-vous demain!</Text>
            </View>
        
          <View style={styles.descriptionBox}>
              <Text style={styles.description}> refused challenges : 
                  {  currentPlayer.playerStats && currentPlayer.playerStats.numberOfActionsRefused   }
                </Text>
                <Text style={styles.description}> refused points with this challenge : 
                  {  propsItem.actionPoint && propsItem.actionPoint  }
                </Text>
                <Text style={styles.description}> potential Score  :    
                  {  currentPlayer.playerStats && currentPlayer.playerStats.potentialScore   }
                </Text>
          </View>
          <View style={styles.cardFooter}>
              <View style={styles.buttonContainer}>
                {  propsItem &&  console.log('propsItem in Dommage screen:   ', propsItem)}
                <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => navigation.navigate('Actions')}>
                  <Text style={styles.buttonText}>chosir un autre defi</Text>
                </TouchableHighlight>
              </View>
          </View>
        </View>
      </ScrollView>
    );
  
}

const styles = StyleSheet.create({
  scrollContainer:{
    flex: 1,

    backgroundColor: Colors.Turquoise1,
    // backgroundColor: '#e0ec80',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around",
  },
  cardHeader: {
    borderWidth: 2,
    borderColor: "pink",
    // paddingVertical: 17,
    // paddingHorizontal: 16,
    // borderTopLeftRadius: 1,
    // borderTopRightRadius: 1,
    // flexDirection: 'collumn',
  },
  photo:{
    width:200,
    height:200,
    justifyContent: 'center',
    marginBottom:5,
    marginTop:10,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: "white",
  },
  title: {
    fontSize:32,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  slogan:{
    fontSize:18,
    fontWeight: '600',
    color: '#228B22',
    marginTop:10,
  },
  descriptionBox:{
    // padding:30
    borderWidth: 4,
    borderColor: "white",
    borderStyle: "dotted",
  },
  description:{
    fontSize:18,
    textAlign:'center',
    marginTop:10,
    color: '#FFFFFF',
  },
  cardFooter:{
    flex : 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // paddingTop: 12.5,
    // paddingBottom: 15,
    // paddingHorizontal: 16,
    // borderBottomLeftRadius: 1,
    // borderBottomRightRadius: 1,
    // backgroundColor:"#EEEEEE",
    borderWidth: 2,
    borderColor: "pink",

  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
  },
  sendButton: {
    backgroundColor: "#FFFFFF",
  },
  buttonText: {
    color: '#EE82EE',
  }
}); 