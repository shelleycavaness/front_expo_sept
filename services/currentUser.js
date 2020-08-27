export default async function getCurrentUser(){
    const  currentPlayer = await fetch('http://localhost:9999/api/v1/players/2') 
    .then((reponse) => reponse.json())
    .then( (responseJson) =>  {
        console.log('/////////////////////////////////////////////', responseJson)
     return responseJson
       })
    .catch((error) => console.error('error in catch ----------',error))
    return currentPlayer
   
   }