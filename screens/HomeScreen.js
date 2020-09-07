import React, { useState, useLayoutEffect, useEffect, useContext } from "react";
import ProfileScreen from './ProfileScreen'
import { Image, StyleSheet, Text, TouchableOpacity,View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { MonoText } from "../components/StyledText";
import { allImages } from "../assets/";
import { CurrentUserContext } from '../contexts/currentUserContext'

export default function HomeScreen({ navigation }) {
  const [actionList, setActionList] = useState();
  const [action, setAction] = useState({});
  const [playerList, setPlayerList] = useState() 
  const [player, setPlayer] = useState({});
  const [newScore, setNewScore] = useState(0)
  const [id, setId] = useState();
  const { setCurrentPlayer } = useContext(CurrentUserContext)

  useEffect(() => {
    let playerId = 2;
    const randomId = Math.floor(Math.random() * Math.floor(4));
    setId(randomId);
    
    fetch(
      "https://docker-nestjs-my-eco-defi.apps.ocp.lab-nxtit.com/api/v1/actions"
    )
      //  fetch('http://localhost:9999/api/v1/actions')
      .then((response) => response.json())
      .then((responseJson) => setActionList(Object.values(responseJson)))
      .catch((error) => console.error("error in catch ----------", error));
    // fetch(
    //   "https://docker-nestjs-my-eco-defi.apps.ocp.lab-nxtit.com/api/v1/players/" +
    //     playerId
    // )
      //  fetch('http://localhost:9999/api/v1/players/' + playerId)
       fetch('http://localhost:9999/api/v1/players')

      .then((response) => response.json())
      .then((responseJson) => setPlayerList(Object.values(responseJson)))
      .catch((error) => console.error("error in catch ----------", error));
  }, []);
  

  const setActionObj = () => {
    if (actionList && actionList.length) {
      setAction(actionList[id]);
    }
  };
  const setPlayerObj = () => {
    if (playerList && playerList.length) {
      setPlayer(playerList[id]);
      // console.log("playerlist setter :>> ", player);
    }
  };
  const getNewScore =() => {
    setNewScore(actionList[id].actionPoint + playerList[id].playerStats.cumulatedScore )
   
  };

  const pressHandler = async (action) => {
    const data = {
      "id": 3,
      "lastName": " Jacoby",
      "firstName": "Rebecca",
      "email": "Rebecca.Jacoby.Cisco@socgen.com",
      "pseudo": "Jacoby-cto-cisco",
      "location": "Les Dunes",
      "playerActions": [],
      "playerStats": {
          "cumulatedScore": 500,
          "numberOfActionsDone": 20,
          "numberOfActionsRefused": 60,
          "potentialScore": 100
      }
    }
      const result = await fetch('http://localhost:9999/api/v1/players/3',
      {method: 'PUT', 
       headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      body: JSON.stringify(data)} 
      )
      .then(response => response.json())
      setCurrentPlayer( await result)
///////////navigation//////
      navigation.navigate("Felicitation", {
        propsItem: actionList[id],
        // newScore: newScore,
      });
  };


  useEffect(() => {
    if (playerList) {
      // console.log(playerList);
    }
    if (newScore > 0) {
      console.log('bigger than 0 ',newScore)
    }
  }, [newScore])

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Le defi du jour : </Text>
        <View style={styles.container2}>
          {actionList && actionList.length > 0 ? (
            <Text style={styles.defiText}>{actionList[id].actionName}</Text>
          ) : (
            <Text style={styles.defiText}>{"defiTitle"}</Text>
          )}
        </View>
        {actionList && actionList.length > 0 ? (
          <Text style={styles.description}>
            {actionList[id].actionDescription}{" "}
          </Text>
        ) : (
          <Text style={styles.description}>{"defiDescript"} </Text>
        )}

        <Text style={styles.description}>points gagnes :</Text>
        {actionList && actionList.length > 0 ? (
          <Text style={styles.points}> {actionList[id].actionPoint}</Text>
        ) : (
          <Text style={styles.points}>{"defipoint"} </Text>
        )}
        <View style={styles.container3}>
          {actionList && actionList.length > 0 ? (
            <Text style={styles.description}>
              Tonnes de CO2 Compensés maintenant :{" "}
              {" " + actionList[id].actionCo2}
            </Text>
          ) : (
            <Text style={styles.points}>{"defipoint"} </Text>
          )}
        </View>
        {actionList && actionList.length > 0 ? (
          <Image
            style={styles.Image}
            source={allImages[actionList[id].actionImg]}
          ></Image>
        ) : (
          <Text>no image</Text>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => pressHandler(action)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Je l'accepte !</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Dommage")}
            style={styles.button2}
          >
            <Text style={styles.buttonText}>Je refuse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  // header: null,
  // header : 'Profile'
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e8f7d7",
  },
  titleText: {
    fontSize: 32,
    fontWeight: "600",
    color: "#8a888c",
  },
  container2: {
    // backgroundColor: '#FFF',
    borderRadius: 3,
    paddingHorizontal: 4,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    // textAlign:'center',
    // borderColor: 'red',
    // borderWidth: 5,
    // borderStyle: 'dotted',
  },
  description: {
    fontSize: 18,
    marginTop: 10,
    color: "#8a888c",
    textAlign: "center",
  },
  defiText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#228B22",
    marginTop: 10,
    padding: 30,
    textAlign: "center",
    borderColor: "black",
    borderWidth: 5,
    borderStyle: "solid",
  },
  container3: {
    backgroundColor: "#FFF",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  Image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 30,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "white",
  },
  defiText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#228B22",
    marginTop: 10,
  },
  points: {
    fontSize: 18,
    fontWeight: "600",
    color: "#228B22",
    marginTop: 10,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#83d499",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    margin: 30,
  },
  button2: {
    backgroundColor: "#f46049",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    margin: 30,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
