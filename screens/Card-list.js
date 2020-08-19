
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
// import ListView from 'deprecated-react-native-listview'
import { allImages } from "../assets/index";
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
  
  // actionList && actionList.length ? 
  // console.log("actionList>>>>>>>>>>>>>", actionList) : 
  // console.log('no object here')

  //function for organizing actions in ascending point order
  const sortPointsUP = actionList.slice(0);
  sortPointsUP.sort(function(a,b) {
      return a.actionPoint - b.actionPoint;
  });
  // console.log('>>>>>>>points  :');
  // console.log(sortPointsUP);



  const pressHandler = ( id ) => {
//itemId-1 to begin with 0 rather than 1 and dispaly the right entry in the database
    navigation.navigate('Detail', {
      itemId: actionList[id]
    })
  };
    return (
      <ScrollView style={styles.container}>
      <Text style={styles.title}>Liste des defis</Text> 
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
                   source={allImages.plus }  
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
  body: {
    padding:30,
    backgroundColor :"#E6EEEA",
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
    height: 60,
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
 