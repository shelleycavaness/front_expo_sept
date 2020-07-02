import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { dommage, velo } from "../assets";
// "../assets/images/dommage.jpeg"

export default function DommageScreen ({ navigation }) {
  console.log('####################dommage', dommage)
    return (
        <View style={styles.container}>
           <View style={styles.contentContainer}>
            <Text>Dommage ! rdv demain</Text>
           
           
          <Image
            source={{uri :dommage }}
            style={styles.welcomeImage2}
           />
   
           <Button title="Go back" onPress={() => navigation.goBack()} />
           </View>   
           
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: '#e3e3e8',     
    },
     contentContainer: {
            padding: 30,
            alignItems: 'center',
        },
    welcomeImage2: {
    
      width: 250,
      height: 250,
    }    
})

