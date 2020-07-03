
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ListView from 'deprecated-react-native-listview'
import { abeille, vinegar, velo, reparer,veggie, paille, stopPub, douche, ampule, fillet } from "../assets";
import data from '../db.json'

export default class UsersView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
            // data.actions
         {image: vinegar, title:"johndoe1"},
         {image: velo, title:"johndoe2"},
         {image: fillet, title:"johndoe3"},
         {image: ampule , title:"johndoe4"},
         {image: stopPub, title:"johndoe5"},
         {image: douche, title:"johndoe6"},
         {image: paille, title:"johndoe7"},
         {image: veggie, title:"johndoe8"},
         {image: abeille, title:"johndoe2"},
      ]),
    };   console.log('data//////////////', data.actions[0].image)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.body}>
            <ListView style={styles.container} enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={(user) => {
                // {console.log('user======', user)}
                return (
                  <TouchableOpacity>
                    <View style={styles.box}>
                      <Image style={styles.image} source={user.image}/> 
                    {/* <Image style={styles.image} source={{(`"${user.image}"`)}}/> */}
                      {/* <Image style={styles.image} source={{image: user.image}}/> */}
                      <Text style={styles.title}>{user.title}</Text>
                      <View style={styles.iconContent}>
                        <Image style={styles.icon} source={{uri: "https://img.icons8.com/material-two-tone/24/000000/plus.png"}}/>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
            }}/>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    width: 60,
    height: 60,
  },
  body: {
    padding:30,
    backgroundColor :"#E6E6FA",
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
    color: "#20B2AA",
    fontSize:18,
    alignSelf:'center',
    marginLeft:10
  },
  iconContent:{
    width: 60,
    height: 60,
    backgroundColor: '#40E0D0',
    marginLeft: 'auto',
    alignItems: 'center'
  },
  icon:{
    width: 40,
    height: 40,
  }
});
 