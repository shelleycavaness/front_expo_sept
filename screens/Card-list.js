
import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TouchableHighlight
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

//function for organizing actions filtering actions
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
    // const completedActions = actionList.filter( (el) => {
    //    return el.actionIsDone == true  
    //  });
     setFilteredList(currentPlayer.playerActions) 
    console.log('///////////getCompletedActions//////////////', currentPlayer.playerActions)    
    }
  ////pseudo incomplete actions for demo///////////  
  const getIncomplActions= () => {
    const inCompletActions = actionList.filter( (el) => {
      console.log('object', currentPlayer.playerActions[0].id )
       return el.id ==  currentPlayer.playerActions[0].id    
     });
     setFilteredList(inCompletActions) 
    console.log('/////////////////////////', inCompletActions)    
    }
  const getAllActions =() => {
      setFilteredList(actionList) 
      // console.log('3333333333333333333333333', filteredList)
      }
  
  const pressHandler = ( id ) => {
//itemId-1 to begin with 0 rather than 1 and dispaly the right entry in the database
    navigation.navigate('Detail', {
      itemId: actionList[id]
    })
  };
    return (
      <ScrollView style={styles.container}>
      {console.log( currentPlayer.playerActions[0].id + ' &&&&&&&', currentPlayer.playerActions)}
       <Text style={styles.title}>Liste des mes defis</Text> 
       <View style={styles.tabBox}>
          <TouchableOpacity style={[styles.buttonContainer, styles.tabButton]}
              onPress={()=> getAllActions()}
            >
              <Text style={styles.tabText}>all actions </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonContainer, styles.tabButton]}
              onPress={()=> getCompletedActions()}
          >
              <Text style={styles.tabText}>actions done</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonContainer, styles.tabButton]}
              onPress={()=> getIncomplActions()}
           >
              <Text style={styles.tabText}>undone</Text>
           </TouchableOpacity>
        </View> 
       <View style={styles.body}>
          <FlatList style={styles.container} 
            keyExtractor={ (item) => item.key }
            data={ 
              filteredList && filteredList.length > 0? filteredList : actionList  
            }

            renderItem={ ({ item }) =>(
              <TouchableHighlight 
              onPress={ () => pressHandler(item.id) }>     
                <View style={styles.box}>
                  <Image style={styles.image} 
                  source={allImages[item.actionImg]} 
                  /> 
                  <Text style={styles.title}>{ item.actionName }</Text> 
                  <View style={styles.iconContent} >
                    <Image style={styles.icon} 
                    //  source={allImages.plus }  
                    source={plusIcon }  
                    />
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
  image:{
    width: 60,
    height: 60,
    borderRadius: 3,
  },
  tabBox:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderColor: Colors.silver,    
    // borderColor: 'yellow',
    flexDirection: 'row',
    
    // borderWidth: 2,
    // borderStyle: 'solid',

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
    padding:30,
    // backgroundColor :"#E6EEEA",
    backgroundColor: Colors.tintColor,
  },
  box: {
    padding: 10,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: "space-between",
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    // elevation:2,
    borderRadius: 5,
  },
  title:{
    color: "darkgrey",
    fontSize:14,
    alignText:'right',
    // alignSelf: "center",
    marginLeft:10,
  },
  iconContent:{
    flex: "column",
    width: 60,
    // height: 60,
    backgroundColor: '#eaeaee',
    marginLeft: 'auto',
    alignItems: 'center',
    paddingTop: 10,

  },
  icon:{
    width: 40,
    height: 40,
  },


});
 