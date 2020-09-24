import * as React from 'react';
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
import MonEcoDefiStack from './monEcoDefiStack';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'montserrat': require('./assets/fonts/Montserrat-Black.ttf'),
          'montserrat2': require('./assets/fonts/Montserrat-Medium.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();

  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <CurrentUserProvider>
        <ActionListProvider>
          <MonEcoDefiStack />
        </ActionListProvider>
      </CurrentUserProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
