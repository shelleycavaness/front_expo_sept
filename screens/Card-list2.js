
import React, { useState, useEffect } from 'react';
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

import { allImages } from "../assets/index";
import Colors from '../constants/Colors';
import CardItem from './CardItem'

export default function MesDefisList({ navigation }) {
  const [actionList, setActionsList] = useState([] );
  const [filteredList, setFilteredList] = useState([])
  useEffect(()=>{
    // fetch( "https://docker-nestjs-my-eco-defi.apps.ocp.lab-nxtit.com/api/v1/actions")
       fetch('http://localhost:9999/api/v1/actions/')
    .then((response) => response.json())
    .then((responseJson) => setActionsList(Object.values(responseJson)))
    .catch((error) => console.error('error in catch ----------',error))
  }, [])   
  useEffect(()=>{
  }, [filteredList])

  const getEverydayActions= () => {
    const everydayAct = actionList.filter( (el) => {
      return el.actionCat == "everyday"         });
     setFilteredList(everydayAct) 
    console.log('/////////////////////////', everydayAct)    
    }
  const getDigitalActions= () => {
    const digitalAct = actionList.filter( (el) => {
      console.log('everyday')
       return el.actionCat == "digital"      
     });
     setFilteredList(digitalAct) 
    console.log('/////////////////////////', digitalAct)    
    }
  const getTransportActions =() => {
    const transpotAct = actionList.filter( (el) => {
      console.log('everyday')
       return el.actionCat == "transport"      
     });
      setFilteredList(transpotAct) 
       console.log('3333333333333333333333333', transpotAct)
      }


  const pressHandler = ( id ) => {
//itemId-1 to begin with 0 rather than 1 and dispaly the right entry in the database
    navigation.navigate('Detail', {
      itemId: actionList[id]
    })
  };
    return (
      <ScrollView style={styles.container}>
      <Text style={styles.title}>Mes defis par catagorie</Text> 
      <View style={styles.tabBox}>
          <TouchableOpacity style={[styles.buttonContainer, styles.tabButton]}
              onPress={()=> getTransportActions()}
            >
              <Text style={styles.tabText}> Tranports </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonContainer, styles.tabButton]}
              onPress={()=> getEverydayActions()}
          >
              <Text style={styles.tabText}>Quotidien</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonContainer, styles.tabButton]}
              onPress={()=> getDigitalActions()}
           >
              <Text style={styles.tabText}>Numerique</Text>
           </TouchableOpacity>
        </View> 
       <View style={styles.body}>
        <FlatList style={styles.container} 
          keyExtractor={ (item) => item.id.toString() }
          // keyExtractor={ (item) => item.key }
          // data={ data1.actions }
          
          data={ filteredList && filteredList.length > 0? filteredList : actionList  

          }

          renderItem={ ({ item }) =>(

              <CardItem  item={item}/>
        
          )}
         />    
       </View>
      </ScrollView>
    );
  

}

const styles = StyleSheet.create({
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
    color: "black",
    fontFamily: "Roboto",
  },
  image:{
    width: 60,
    // height: 60,
    borderRadius: 3,
  },
  body: {
    padding:10,
    backgroundColor :Colors.silver,
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
    color: "darkgrey",
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
  }
});
 