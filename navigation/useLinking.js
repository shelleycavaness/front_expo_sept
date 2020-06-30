import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Actions: 'actions',
          Profile: 'profile',
          Felicitation: 'felicitation',
          Dommage : 'dommage'
        },
      },
    },
  });
}
