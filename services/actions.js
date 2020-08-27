export default async function getActions(){
 const  actionArray = await fetch('http://localhost:9999/api/v1/actions/') 
 .then((reponse) => reponse.json())
 .then( (responseJson) =>  {
     console.log('/////////////////////////////////////////////', responseJson)
  return responseJson
    })
 .catch((error) => console.error('error in catch ----------',error))
 return actionArray

}