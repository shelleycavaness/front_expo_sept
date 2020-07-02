import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { congrats } from "../assets";

export default function FeliciationScreen ({ navigation }) {
    return (
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={{ fontSize: 30 }}>congrats!</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Image
              source={{uri :congrats }}
              style={styles.welcomeImage2}
           />
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
            paddingTop: 30,
            alignItems: 'center',
        },
      welcomeImage2: {
      padding: 30,
      width: 250,
      height: 250,
    }          
})



