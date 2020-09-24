
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
          <View style={styles.headerBox}>
              <TouchableOpacity style={[styles.headerButtonContainer, styles.tabButton]}
                  onPress={()=> getAllActions()}
                >
                  <Text style={styles.headerButtonText}>Aujourd'hui</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.headerButtonContainer, styles.tabButton]}
                  onPress={()=> getCompletedActions()}
              >
                  <Text style={styles.headerButtonText}>Achevés</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.headerButtonContainer, styles.tabButton]}
                  onPress={()=> getIncomplActions()}
              >
                  <Text style={styles.headerButtonText}>Inachevés</Text>
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
                  <View style={styles.cardImageContainer}>
                    <ImageBackground style={styles.cardImage}  imageStyle={{ opacity: 0.6}}
                      source={allImages[item.actionImg]} >
                        <Text style={styles.cardTitle}>{item.actionName }</Text>
                    </ImageBackground>
                    
                  </View>
                 
               
                  <View style={styles.cardFooter}>
                    <View style={styles.footerBarContainer}>
                        <View style={styles.footerBarSection}>
                                  <TouchableOpacity style={styles.footerBarButton}>
                                    <Image style={styles.footerIcon} source={{uri: allImages.watts}}/>
                                    <Text style={styles.footerIconLabel}>{item.actionPoint}</Text>
                                  </TouchableOpacity>
                        </View>
                        <View style={styles.footerBarSection}>
                                  <TouchableOpacity style={styles.footerBarButton}>
                                    <Image style={styles.footerIcon} source={{uri: allImages.waterDrop}}/>
                                    <Text style={styles.footerIconLabel}>{item.actionPoint}</Text>
                                  </TouchableOpacity>
                        </View>
                        <View style={styles.footerBarSection}>
                                  <TouchableOpacity style={styles.footerBarButton}>
                                    <Image style={styles.footerIcon} source={{uri:allImages.renewable }}/>
                                    <Text style={styles.footerIconLabel}>{item.actionCo2}</Text>
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
    fontFamily:  "montserrat"
    ,
    fontSize: 18,
    textAlign: "center",
    paddingBottom:5,
  },
  headerBox:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
   
  },
  headerButtonContainer: {
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
  headerButtonText:{
    color: Colors.Turquoise2,
    fontFamily: "montserrat",
  },
  body: {
    paddingHorizontal:30,
    // backgroundColor :"#E6EEEA",
    backgroundColor: Colors.tintColor,
  },

/******** card flatlist**************/
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
cardImageContainer:{
  // flex: 1,
  // alignItems:"center",
  // minHeight:80,
},
cardImage:{
  flex: 1,
  borderRadius: 5,
  minHeight:80,
  // alignContent:"center",
  alignItems:"center",
},
cardTitle:{
  fontSize:18,
  paddingTop:10,
  color:  Colors.grey3,
  // color: Colors.tintColor,
  fontWeight: '500',
  paddingLeft: 10,
  fontFamily: "montserrat"
},
/******** card footer **************/

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
footerBarContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flex: 1
},

footerBarSection: {
  justifyContent: 'center',
  flexDirection: 'row',
  flex: 1,
},
footerBarButton:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
},
footerIcon: {
  width:25,
  height:25,
  borderRadius: 5,
  borderColor: 'white',
  borderWidth: 2,
},
footerIconLabel: {
  marginLeft: 8,
  alignSelf: 'flex-end',
  justifyContent: 'center',
},



});
 