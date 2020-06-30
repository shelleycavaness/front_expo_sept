import * as React from 'react';
import { StyleSheet, Text, View, Image,
  TouchableOpacity, ListView } from 'react-native';

import data from '../db.json'

export default function ActionsScreen() {
  console.log('data.actions+++++++++++++++++++++++', data.actions)
  let item = data.actions[1]
  return (
    <TouchableOpacity>
    <View style={styles.card}>

      <Image style={styles.cardImage} source={{uri:item.thumbnailUrl}}/>
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.title}</Text>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.socialBarContainer}>
            <View style={styles.socialBarSection}>
              <TouchableOpacity style={styles.socialBarButton}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/android/75/ffffff/hearts.png'}}/>
                <Text style={styles.socialBarLabel}>78</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.socialBarSection}>
              <TouchableOpacity style={styles.socialBarButton}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ios-glyphs/75/ffffff/comments.png'}}/>
                <Text style={styles.socialBarLabel}>25</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.socialBarSection}>
              <TouchableOpacity style={styles.socialBarButton}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/material/50/ffffff/retweet.png'}}/>
                <Text  style={styles.socialBarLabel}>13</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 1,
  },
  /******** card **************/
  card:{
    margin: 0,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    backgroundColor: "#DCDCDC",
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
    //overlay efect
    flex: 1,
    height: 200,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:22,
    color: "#ffffff",
    marginTop: 10,
    fontWeight:'bold'
  },
  time:{
    fontSize:13,
    color: "#ffffff",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    color: "#ffffff",
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});  
 

//////////////////old code //////////////

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fafafa',
    
//   },
//   contentContainer: {
//     paddingTop: 15,
//     alignItems: 'center',
//   },
//   optionIconContainer: {
//     marginRight: 12,
//   },
//   option: {
//     backgroundColor: '#fdfdfd',
//     paddingHorizontal: 15,
//     paddingVertical: 15,
//     borderWidth: StyleSheet.hairlineWidth,
//     borderBottomWidth: 0,
//     borderColor: '#ededed',
//   },
//   lastOption: {
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
//   optionText: {
//     fontSize: 15,
//     alignSelf: 'flex-start',
//     marginTop: 1,
//   },
//   welcomeImage: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//     marginRight: 0,
//     marginLeft: 0,
//   },
// });




// <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
// <OptionButton
//   icon="md-school"
//   label="Read the Expo documentation"
//   onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
// />

// <OptionButton
//   icon="md-compass"
//   label="Read the React Navigation documentation"
//   onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
// />

// <OptionButton
//   icon="ios-chatboxes"
//   label="Ask a question on the forums"
//   onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
//   isLastOption
// />
// <Text>happy now i'm centered</Text>
// <Image 
//  source={require('../assets/images/ampoule.jpeg')}
//  style={styles.welcomeImage}
// />
// </ScrollView>
// function OptionButton({ icon, label, onPress, isLastOption }) {
//   return (
//     <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
//       <View style={{ flexDirection: 'row' }}>
//         <View style={styles.optionIconContainer}>
//           <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
//         </View>
//         <View style={styles.optionTextContainer}>
//           <Text style={styles.optionText}>{label}</Text>
//         </View>
//       </View>
//     </RectButton>
//   );
// }
