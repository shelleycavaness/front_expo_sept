import React, {useEffect} from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import { screensEnabled } from 'react-native-screens';
import FeliciationScreen from './screens/FeliciationScreen';
import DommageScreen from './screens/DommageScreen';
import DetailScreen from './screens/DetailScreen'
import ProfileScreen from './screens/ProfileScreen';
import ActionListProvider from './contexts/actionListContext'
import CurrentUserProvider, { CurrentUserContext } from './contexts/currentUserContext'
import getCurrentUser from './services/currentUser'

const Stack = createStackNavigator();
export default function MonEcoDefiStack(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  const {currentPlayer, setCurrentPlayer}  = React.useContext(CurrentUserContext)
  
  useEffect(() => {
    async function fetchCurrentUser(){
        try{
          setCurrentPlayer(await getCurrentUser()) 
        } catch(err){
          console.log('err :>> ', err);
        }  
      }
      fetchCurrentUser()  
  }, [])
  
  useEffect(()=>{
    console.log('currentPlayer0000000000000000000000000000000000000000', currentPlayer)

  }, [currentPlayer])  


  return(
    <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
              <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator} />
                <Stack.Screen name="Felicitation" component={FeliciationScreen} />
                <Stack.Screen name="Dommage" component={DommageScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
