
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
  const [actionList, setActionsList] = useState([] );
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


  //function for organizing actions in ascending point order
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
  
  const pressHandler = ( id ) => {
//itemId-1 to begin with 0 rather than 1 and dispaly the right entry in the database
    navigation.navigate('Detail', {
      itemId: actionList[id]
    })
  };
    return (
      <ScrollView style={styles.container}>
      <View >
      <Text style={styles.title}>Liste des defis</Text> 
      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}
        onPress={()=> filterDown()}
      >
          <Text style={styles.loginText}>filter points</Text>
        </TouchableOpacity>
        </View> 
       <View style={styles.body}>
        <FlatList style={styles.container} 
          keyExtractor={ (item) => item.id.toString() }
          // keyExtractor={ (item) => item.key }
          // data={ data1.actions }
          
          data={  actionList && actionList.length > 0 ? 
            actionList :  console.log('actionList empty :>> ', actionList) 
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
  buttonContainer: {
    height:25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:150,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#c5ced4',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
  },
});
 