export default async function getCurrentUser(){
    const  currentPlayer = await fetch('http://localhost:9999/api/v1/players/3') 
    // const  currentPlayer = await fetch('https://docker-nestjs-my-eco-defi.apps.ocp.lab-nxtit.com/api/v1/players/2') 

    .then((reponse) => reponse.json())
    .then( (responseJson) =>  {
        console.log('////// fetch getCurrentUser', responseJson)
        return responseJson
       })
    .catch((error) => console.error('error in catch ----------',error))
    return currentPlayer
   
   }