
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';

import { abeille, vinegar } from "../assets";

export default class UsersView extends Component {

  constructor(props) {
    super(props);
    const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: ds.cloneWithRows([
         {image: vinegar, username:"johndoe1"},
         {image: "../assets/images/velo.jpeg", username:"johndoe2"},
         {image: "../assets/images/abeille.jpeg", username:"johndoe3"},
         {image: "../assets/images/ampoule.jpeg", username:"johndoe4"},
         {image: "../assets/images/art-stop.jpg.", username:"johndoe5"},
         {image: "../assets/images/douche.jpeg", username:"johndoe6"},
         {image: "../assets/images/paille.jpeg", username:"johndoe7"},
         {image: "../assets/images/vegetarien.jpeg", username:"johndoe8"},
         {image: abeille, username:"johndoe2"},
      ]),
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.body}>
            <FlatList style={styles.container} enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderItem={(user) => {
                // {console.log('user======', user)}
                return (
                  <TouchableOpacity>
                    <View style={styles.box}>
                    <Image style={styles.image} source={user.image}/> 
                    {/* <Image style={styles.image} source={{(`"${user.image}"`)}}/> */}
                      {/* <Image style={styles.image} source={{image: user.image}}/> */}
                      <Text style={styles.username}>{user.username}</Text>
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
  username:{
    color: "#20B2AA",
    fontSize:22,
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
 