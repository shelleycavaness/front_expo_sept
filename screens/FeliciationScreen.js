import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


export default function FeliciationScreen ({ navigation }) {
    return (
        <View >
            <Text style={{ fontSize: 30 }}>congrats!</Text>
            <Button onPress={() => navigation.goBack()}/>
        </View>
    )
}


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//          backgroundColor: '#e3e3e8',     
//     },
//      contentContainer: {
//             paddingTop: 30,
//             alignItems: 'center',
//         },
// })



