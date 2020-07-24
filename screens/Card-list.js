
import React, { useState } from 'react';
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
import data1 from '../db.json'

export default function UsersView({ navigation }) {
  const [actionList, setActions] = useState(
    data1.actions
   );
  const pressHandler = ( id ) => {
//itemId-1 t6 begin with 0 rather than 1 and dispaly the right entry in the database
    navigation.navigate('Detail', {
      itemId: id-1
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
          data={ actionList }
          renderItem={ ({ item }) =>(
            <TouchableHighlight 
            onPress={ () => pressHandler(item.id) }>     
              <View style={styles.box}>
                <Image style={styles.image} 
                 source={allImages[item.photo]} 
                /> 
               <Text style={styles.title}>{ item.title }</Text> 
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
    backgroundColor :"#AEBEA2",
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
 