
import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import { CurrentUserContext } from '../contexts/currentUserContext'
import Colors from '../constants/Colors';
import { allImages } from "../assets/index";
import plusIcon from '../assets/images/icons/iconfinder_plus_325963.png'

export default function UsersView({ navigation }) {
  const [actionList, setActionsList] = useState([]);
  const [filteredList, setFilteredList] = useState([])
  const { currentPlayer } = useContext(CurrentUserContext)

  useEffect(()=>{
    // fetch( "https://docker-nestjs-my-eco-defi.apps.ocp.lab-nxtit.com/api/v1/actions")
       fetch('http://localhost:9999/api/v1/actions/')
    .then((response) => response.json())
    .then((responseJson) => setActionsList(Object.values(responseJson)))
    .catch((error) => console.error('error in catch ----------',error))
  }, [])  

  // watching the actionList to update in real time
  useEffect(()=>{
  }, [filteredList ])
 
  // const {actionList, setActionsList} = useContext(ActionListContext)
  // useEffect( async ()=>{
  //   setActionsList( await getActions()) //fetch
  // }, [])

//functions for organizing actions filtering actions
  const filterUP =()=>{
    const sortPointsUP = actionList.slice(0);
    sortPointsUP.sort(function(a,b) {
        return a.actionPoint - b.actionPoint;   
    });
    console.log('>>>>>>>points  :',sortPointsUP);
    setActionsList(sortPointsUP)
  }
  const filterDown =()=>{
    const sortPointsDown = actionList.slice(0);
    sortPointsDown.sort(function(a,b) {
        return  b.actionPoint- a.actionPoint;   
    });
    console.log('>>>>>>>points  :',sortPointsDown);
    setActionsList(sortPointsDown)
  }
  const getCompletedActions= () => {
   setFilteredList(currentPlayer.playerActions) 
    }
  ////pseudo incomplete actions for demo///////////  
  const getIncomplActions= (actions) => {
    const completedA = currentPlayer.playerActions
    let tab =[]
    completedA.forEach(item => tab.push(item.id) )  
    console.log("------------------",tab) 
    let incompleted = actionList.filter( action => tab.indexOf(action.id) <0 )
    setFilteredList(incompleted) 
    }
  const getAllActions =() => {
      setFilteredList(actionList) 
      }
  
  const pressHandler = ( id ) => {
//itemId-1 to begin with 0 rather than 1 and dispaly the right entry in the database
    navigation.navigate('Detail', {
      itemId: actionList[id]
    })
  };
    return (
      <ScrollView style={styles.container}>
       <View style={styles.header}>
          <Text style={styles.headerText}>Liste des mes defis</Text> 
          <View style={styles.tabBox}>
              <TouchableOpacity style={[styles.buttonContainer, styles.tabButton]}
                  onPress={()=> getAllActions()}
                >
                  <Text style={styles.tabText}>Aujourd'hui</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttonContainer, styles.tabButton]}
                  onPress={()=> getCompletedActions()}
              >
                  <Text style={styles.tabText}>Achevés</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttonContainer, styles.tabButton]}
                  onPress={()=> getIncomplActions()}
              >
                  <Text style={styles.tabText}>Inachevés</Text>
              </TouchableOpacity>
            </View> 
        </View>    
       <View style={styles.body}>
          <FlatList style={styles.container} 
            keyExtractor={ (item) => item.key }
            data={ 
              filteredList && filteredList.length > 0 ? filteredList : actionList  
            }

            renderItem={ ({ item }) =>(
              <TouchableHighlight 
              onPress={ () => pressHandler(item.id) }>     
                <View style={styles.card}>
                  <ImageBackground style={styles.cardImage} 
                    source={allImages[item.actionImg]} >
                       <Text style={styles.title}>{item.actionName }</Text>
                    </ImageBackground>
                <View style={styles.cardHeader}>
                 
                </View>
                <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                                  <TouchableOpacity style={styles.socialBarButton}>
                                    <Image style={styles.icon} source={{uri: allImages.watts}}/>
                                    <Text style={styles.socialBarLabel}>{item.actionPoint}</Text>
                                  </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                                  <TouchableOpacity style={styles.socialBarButton}>
                                    <Image style={styles.icon} source={{uri: allImages.waterDrop}}/>
                                    <Text style={styles.socialBarLabel}>{item.actionPoint}</Text>
                                  </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                                  <TouchableOpacity style={styles.socialBarButton}>
                                    <Image style={styles.icon} source={{uri:allImages.renewable }}/>
                                    <Text style={styles.socialBarLabel}>{item.actionCo2}</Text>
                                  </TouchableOpacity>
                        </View>
                  </View>
                </View>
            </View>
              </TouchableHighlight>
            )}
          />    
       </View>
      </ScrollView>
    );
  

}

const styles = StyleSheet.create({
  header:{
 

  },
  headerText:{
    color: Colors.grey2,
    fontFamily: "Georgia",
    fontSize: '1em',
    textAlign: "center",
    paddingBottom:5,
  },

  tabBox:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
   
  },
  buttonContainer: {
    height:25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:100,
    borderRadius:30,
    borderColor: Colors.grey1, 
    borderWidth: 2,
    flexDirection: 'row',
    borderStyle: 'solid',
  },
  tabButton: {
    backgroundColor:Colors.platinum,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
    borderBottomColor: Colors.slateGray,
  },
  tabText:{
    color: Colors.Turquoise2,
    fontFamily: "Roboto",
  },
  body: {
    paddingHorizontal:30,
    // backgroundColor :"#E6EEEA",
    backgroundColor: Colors.tintColor,
  },

/******** card **************/
card:{
  shadowColor: '#00000021',
  shadowOffset: {
    width: 2
  },
  shadowOpacity: 0.5,
  shadowRadius: 4,
  marginVertical: 8,
  backgroundColor:"white",
  borderRadius: 5,
},
cardHeader: {
  paddingVertical: 5,
  paddingHorizontal: 15,
  borderTopLeftRadius: 1,
  borderTopRightRadius: 1,
  flexDirection: 'column',
},
cardContent: {
  paddingVertical: 5,
  paddingHorizontal: 16,
  justifyContent: 'space-between',
},
cardFooter:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingTop: 5,
  paddingBottom: 5,
  paddingHorizontal: 16,
  borderBottomLeftRadius: 1,
  borderBottomRightRadius: 1,
  backgroundColor:"#EEEEEE",
},
cardImage:{
  flex: 1,
  borderRadius: 5,
  minHeight:80,
  // width: null,
  opacity: 0.5,
},
/******** card components **************/
title:{
  fontSize:14,
  // flex:1,
  color:  "black",
  // color: "white",
  fontWeight: 800,
  
}, 
description:{
  fontSize:15,
  color:"#888",
  flex:1,
  marginTop:5,
  marginBottom:5,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
},
time:{
  fontSize:13,
  color: "#808080",
  marginTop: 5
},
icon: {
  width:25,
  height:25,
  borderRadius: 5,
  borderColor: 'white',
  borderWidth: 2,
},
iconData:{
  width:15,
  height:15,
  marginTop:5,
  marginRight:5
},
timeContainer:{
  flexDirection:'row'
},
/******** social card bar ******************/
socialBarContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flex: 1
},
socialBarSection: {
  justifyContent: 'center',
  flexDirection: 'row',
  flex: 1,
},
socialBarlabel: {
  marginLeft: 8,
  alignSelf: 'flex-end',
  justifyContent: 'center',
},
socialBarButton:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

});
 