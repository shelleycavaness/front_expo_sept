import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DommageScreen from '../screens/DommageScreen';
import FeliciationScreen from '../screens/FeliciationScreen';


export const Stack = createStackNavigator({
    FeliciationScreen : {screen: FeliciationScreen},
    DommageScreen : {screen :DommageScreen},
});

// function myStack (){
//   return(
//     <NavigationContainer>
//         <Stack.Navigator>
           
//             <Stack.Screen name="FeliciationScreen" component={FeliciationScreen} />
//             <Stack.Screen name="DommageScreen" component={DommageScreen} />
//         </Stack.Navigator>
//     </NavigationContainer>   
//   )  
// } 