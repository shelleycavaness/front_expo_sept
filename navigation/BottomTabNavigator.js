import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ActionsScreen from '../screens/ActionsScreen';
import ProfileScreen from '../screens/ProfileScreen'
// import Cardlist from '../screens/Card-list'
import CardlistScreen from '../screens/Card-list'
import Header from "../components/Header"

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Défi du jour',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-leaf" />,
        }}
      />
      <BottomTab.Screen
        name="Actions"
        component={CardlistScreen}
        options={{
          title: 'Actions',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-menu" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
      
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return ()=> <Header/>
    case 'Actions':
      return 'Call to Eco Actions';
    case 'Profile':
      return 'Player Profile'; 

  }
}
