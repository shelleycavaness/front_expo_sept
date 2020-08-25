import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen'
// import ProfileScreen from '../screens/Card-list2'
import MesDefisListScreen from '../screens/Card-list2'
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
          title: 'Mes défis',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-menu" />,
        }}
      />
      <BottomTab.Screen
        name="MesDefisListScreen"
        component={MesDefisListScreen}
        options={{
          title: 'défis dispos',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-menu" />,
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
      return ()=> <Header/>
    case 'MesDefisListScreen':
      return ()=> <Header/>

  }
}
