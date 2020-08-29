
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
import { ActionListContext } from '../contexts/actionListContext'
import Colors from '../constants/Colors';
import getActions from '../services/actions';
// import ListView from 'deprecated-react-native-listview'
import { allImages } from "../assets/index";
import plusIcon from '../assets/images/icons/iconfinder_plus_325963.png'
// import data1 from '../db.json'

export default function UsersView({ navigation }) {
  const [actionList, setActionsList] = useState([]);
  const [filteredList, setFilteredList] = useState([])
  useEffect(()=>{
    // fetch( "https://docker-nestjs-my-eco-defi.apps.ocp.lab-nxtit.com/api/v1/actions")
       fetch('http://localhost:9999/api/v1/actions/')
    .then((response) => response.json())
    .then((responseJson) => setActionsList(Object.values(responseJson)))
    .catch((error) => console.error('error in catch ----------',error))
  }, [])   
  // watching the actionList to update in real time
  useEffect(()=>{
    
  }, [actionList])
 
  // const {actionList, setActionsList} = useContext(ActionListContext)
  // useEffect( async ()=>{
  //   setActionsList( await getActions()) //fetch
  // }, [])
  // console.log('actionList ::::::::::::::::::::::::::::::::::::::::::::::::::::>> ', actionList);


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
    const completedActions = actionList.filter( (el) => {
       return el.actionIsDone == true  
     });
     setFilteredList(completedActions) 
    console.log('/////////////////////////', completedActions)    
    }
  const getIncomplActions= () => {
    const inCompletActions = actionList.filter( (el) => {
       return el.actionIsDone == false      
     });
     setFilteredList(inCompletActions) 
    console.log('/////////////////////////', inCompletActions)    
    }
  const getAllActions =() => {
      setFilteredList(actionList) 
      // console.log('3333333333333333333333333', filteredList)
      }
  console.log('getAllActions', filteredList)
  
  const pressHandler = ( id ) => {
//itemId-1 to begin with 0 rather than 1 and dispaly the right entry in the database
    navigation.navigate('Detail', {
      itemId: actionList[id]
    })
  };
    return (
      <ScrollView style={styles.container}>
      
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
              <Text style={styles.tabText}>undone actions </Text>
           </TouchableOpacity>
        </View> 
       <View style={styles.body}>
          <FlatList style={styles.container} 
            keyExtractor={ (item) => item.id.toString() }
            // keyExtractor={ (item) => item.key }
            // data={ data1.actions }
            
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
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  title:{
    color: "#E6D5AA",
    fontSize:18,
    alignSelf:'center',
    marginLeft:10
  },
  iconContent:{
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
 