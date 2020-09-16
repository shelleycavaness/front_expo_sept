import React, { useState, useLayoutEffect, useEffect, useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity,View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { MonoText } from "../components/StyledText";
import { allImages } from "../assets/";
import Colors from '../constants/Colors';
import {ActionListContext} from '../contexts/actionListContext'
import { CurrentUserContext  } from '../contexts/currentUserContext'

export default function HomeScreen({ navigation }) {
  const [actionList, setActionList] = useState();
  const [action, setAction] = useState({});
  const [playerList, setPlayerList] = useState() 
  const [id, setId] = useState();
  const { setCurrentPlayer, currentPlayer } = useContext(CurrentUserContext)

  useEffect(() => {
    let playerId = 2;
    const randomId = Math.floor(Math.random() * Math.floor(7));
    setId(randomId);
    
    // fetch(
    //   "https://docker-nestjs-my-eco-defi.apps.ocp.lab-nxtit.com/api/v1/actions"
    // )
       fetch('http://localhost:9999/api/v1/actions')
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
   
  useEffect(()=>{
   
    actionList && setAction(actionList[id])
     
  },[])

    const pushActionToPlayer = ()=>{
      let playerCopy = currentPlayer
      currentPlayer.playerActions && playerCopy.playerActions.push(actionList[id])
      console.log('object =======================:>> ', playerCopy);
      return playerCopy
  }
  
 
  // const getNewScore =() => {
  //   setNewScore(actionList[id].actionPoint + playerList[id].playerStats.cumulatedScore )
  // };

  const pressHandler = async (action) => {
    const data = pushActionToPlayer()

      const result = await fetch('http://localhost:9999/api/v1/players/3',
      {method: 'PUT', 
       headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      body: JSON.stringify(data)} 
      )
      .then(response => response.json())
      console.log('await result', await result)
      setCurrentPlayer( await result)
/////////////////////navigation///////////////////////
      navigation.navigate("Felicitation", {
        propsItem: actionList[id],
        // newScore: newScore,
      });
  };
  

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Le défi du jour : </Text>
        <View style={styles.container2}>
          {actionList && actionList.length > 0 ? 
          ( <Text style={styles.defiText}>{actionList[id].actionName}</Text>) 
          : 
          ( <Text style={styles.defiText}>{"defiTitle"}</Text>  )}
        </View>
        <View style={styles.container2}>
        {
            actionList && actionList.length > 0 ? 
            ( <Text style={styles.description}>
              {actionList[id].actionDescription}{" "}
            </Text>) 
            : 
            ( <Text style={styles.description}>{"defiDescript"} </Text>)
        }
       
        </View>
        <View style={styles.container3}>
          <Text style={styles.points}>points gagnes :</Text>
        {
          actionList && actionList.length > 0 ? 
          (  <Text style={styles.points}> {actionList[id].actionPoint}</Text>) 
          :
         ( <Text style={styles.points}>{"defi-point"} </Text> )
        }
        </View>
          <View style={styles.container3}>
            {actionList && actionList.length > 0 ? (
              <Text style={styles.description}>
                Tonnes de CO2 Compensés maintenant :{" "}
                {" " + actionList[id].actionCo2}
              </Text>
            ) : (
              <Text style={styles.points}>{"co2"} </Text>
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
              <Text style={styles.buttonText}>J'accepte !</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Dommage",  {
                propsItem: actionList[id]   
              }  )}
              style={styles.button2}
            >
              <Text style={styles.buttonText}>Je le refuse</Text>
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
    backgroundColor: Colors.lightestGrey,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.slateGray,
    fontFamily: "Roberto",
    textAlign: "center",

  },
  container2: {
    borderRadius: 3,
    paddingHorizontal: 4,
    paddingBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    // alignSelf: "center",
    
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    // marginTop: 4,
    color: "#8a888c",
    // textAlign: "center",
  },
  defiText: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.moss,
    // marginTop: 10,
    // padding: 30,
    textAlign: "center",
    borderColor: "black",
    borderWidth: 5,
    borderStyle: "solid",
  },
  container3: {
    // flex:1,
    // flexDirection: "row",
    // backgroundColor: "#FFF",
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
    color: Colors.moss,
    marginTop: 10,
  },
  points: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.moss,
    textAlign: "center",

  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginTop: 30,
    // marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.greenLaurel,
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

const data2 = [
  
{
  "id": 0,
  "actionName": "Faire tourner la machine à laver le linge pleine",
  "actionDescription": "Le fait de remplir votre lave-linge, vous permet donc de faire des économies d'énergie, aussi bien sur l'eau que sur l'électricité, car vous faites moins de machines. En toute logique, il est plus rentable de faire tourner une machine pleine que deux demi-machines.",
  "actionIsDone": true,
  "actionIsRefused": false,
  "actionImg": "vinegar",
  "actionPoint": 130,
  "actionCo2": 30,
  "actionKw": 30,
  "actionH2O": 30
},
{
  "id": 1,
  "actionName": "Je refuse les publicités papiers dans ma boîte aux lettres",
  "actionDescription": "Je refuse les publicités papiers dans ma boîte aux lettres en plaçant un message \"Stop Pub\". Précédemment, on disait bye-bye aux courriers non sollicités. Nous avons poursuivi avec les dépliants.",
  "actionIsDone": true,
  "actionIsRefused": false,
  "actionImg": "stopPub",
  "actionPoint": 30,
  "actionCo2": 30,
  "actionKw": 30,
  "actionH2O": 30
},
{
  "id": 2,
  "actionName": "Arrêter d’utiliser assiettes, gobelets et couverts jetables",
  "actionDescription": "utiliser de la vaisselle solides et non jetables, emmener des serviettes en tissus, préparer des plats simples et facile à manger.",
  "actionIsDone": true,
  "actionIsRefused": false,
  "actionImg": "plasticCup",
  "actionPoint": 80,
  "actionCo2": 30,
  "actionKw": 30,
  "actionH2O": 30
},
{
  "id": 3,
  "actionName": "Arrêter l’eau quand on se lave les mains",
  "actionDescription": "Cette méthode permet d'économiser 15 litres d'eau potable à chaque fois que vous vous lavez les mains. Moi, je me lave les mains plus de 5 fois par jour. Donc cela fait déjà 75 litres par jour.",
  "actionIsDone": true,
  "actionIsRefused": false,
  "actionImg": "douche",
  "actionPoint": 90,
  "actionCo2": 30,
  "actionKw": 30,
  "actionH2O": 30
},
{
  "id": 4,
  "actionName": "Acheter des fruits et légumes de saison",
  "actionDescription": "Consommer en suivant le calendrier des saisons permet d’économiser de l’argent. En effet, les fruits et légumes de saison sont bien moins chers que ceux cultivés en serre ou importés.",
  "actionIsDone": true,
  "actionIsRefused": false,
  "actionImg": "veggieBag",
  "actionPoint": 50,
  "actionCo2": 30,
  "actionKw": 30,
  "actionH2O": 30
},
{
  "id": 5,
  "actionName": "On dit « Non aux échantillons » ",
  "actionDescription": "Refuser les échantillons gratuits.",
  "actionIsDone": true,
  "actionIsRefused": false,
  "actionImg": "abeille",
  "actionPoint": 50,
  "actionCo2": 30,
  "actionKw": 30,
  "actionH2O": 30
},
{
  "id": 6,
  "actionName": "Installer un mousseur sur les robinets",
  "actionDescription": "L'eau est un poste de dépense important pour votre foyer d’autant que son prix ne cesse d’augmenter. Selon l’Ademe, équiper tous vos robinets d'éco-mousseurs peut vous aider à réduire considérablement votre consommation d’eau, sachant que le débit courant d’un robinet est de 12 litres par minute. En effet, il est possible de consommer jusqu’à 50% d’eau en moins et donc de réaliser des économies importantes.",
  "actionIsDone": false,
  "actionIsRefused": true,
  "actionImg": "ampule",
  "actionPoint": 50,
  "actionCo2": 30,
  "actionKw": 30,
  "actionH2O": 30
},
{
  "id": 7,
  "actionName": "Planifier ses menus pour éviter le gaspillage",
  "actionDescription": "Faire ses plannings de repas équilibrés et éviter le gaspillage alimentaire. Le concept de Menu to Shop se base sur un constat très simple, planifier ses repas permet de manger plus équilibré, plus diversifié tout en gaspillant moins.",
  "actionIsDone": true,
  "actionIsRefused": false,
  "actionImg": "fillet",
  "actionPoint": 50,
  "actionCo2": 30,
  "actionKw": 30,
  "actionH2O": 30
}
]