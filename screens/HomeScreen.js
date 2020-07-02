import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '../components/StyledText';
import data from '../db.json'
// import  ActionComponent  from '../components/ActionComponent'


export default function HomeScreen({ navigation }) {
  let id = Math.floor(Math.random() * 4) + 1 ;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Le defi du jour : </Text>
          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>{data.actions[id].title}</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Ceci est le description pour le defi. Ce texte sera un peu plus long que les autres textes 
          </Text>
          <Text style={styles.getStartedText}>
          points gagnes pour le defi
          </Text>
          <Image
            source={
            
             {uri : data.actions[id].thumbnailUrl}
            }
            style={styles.welcomeImage2}
          />
          
          {/* <ActionComponent /> */}

              <View style={styles.buttonContainer}>
                  <TouchableOpacity 
                      onPress={() => navigation.navigate('Felicitation')} 
                      style={styles.button}>
                    <Text style={styles.buttonText}>Je l'ai fait</Text>
                  </TouchableOpacity>
                      
                  <TouchableOpacity 
                    onPress={() => navigation.navigate('Dommage')} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>Je refuse</Text>
                  </TouchableOpacity>      
              </View> 
        </View>

      </ScrollView>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  welcomeImage2: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
   justifyContent: 'space-between',
  },
  button: {
    backgroundColor: "#83d499",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
