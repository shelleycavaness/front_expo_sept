import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function DommageScreen ({ navigation }) {
    return (
        <View >
            <Text>Dommage ! rdv demain</Text>
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
})

