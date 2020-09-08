import React, { useState } from 'react';
import {
  StyleSheet,Text,View,TouchableOpacity,Image, TouchableHighlight} from 'react-native';
import { allImages } from "../assets/index";  
import { useNavigation  } from '@react-navigation/native';

export default function CardItem({item}) {
  const [actionList, setActionsList] = useState([]);
// console.log('item', actionList)
  const navigation = useNavigation();
  const pressHandler = ( id ) => {
    //itemId-1 to begin with 0 rather than 1 and dispaly the right entry in the database
    console.log('id////////////', item)
        navigation.navigate('Detail', {
     
        itemId : item
        })
      };
  return(

   <TouchableHighlight 
    onPress={ () => pressHandler(item.id) }>     
    
      <View style={styles.card}>
                      <Image style={styles.cardImage} 
                      source={allImages[item.actionImg]}                 />
        <View style={styles.cardHeader}>
            <View>
                          <Text style={styles.title}>{item.actionName }</Text>
                          <Text style={styles.description}>{item.actionDescription}</Text>
                      <View style={styles.timeContainer}>
                            <Image style={styles.iconData} source={{uri: allImages.readMore}}/>
                            <Text style={styles.time}>read more</Text>
                      </View>
              </View>
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
                              <Image style={styles.icon} source={{uri:allImages.renewable }}/>
                              <Text style={styles.socialBarLabel}>{item.actionCo2}</Text>
                            </TouchableOpacity>
                  </View>
            </View>
          </View>
      </View>

   </TouchableHighlight>
  )


} 





const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
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
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor:"#EEEEEE",
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
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
  /******** social bar ******************/
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