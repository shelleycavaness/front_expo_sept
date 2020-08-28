export default async function getActions(){
 const  actionArray = await fetch('http://localhost:9999/api/v1/actions/') 
//  const  actionArray = await fetch('https://docker-nestjs-my-eco-defi.apps.ocp.lab-nxtit.com/api/v1/actions') 

 .then((reponse) => reponse.json())
 .then( (responseJson) =>  {
     console.log('/////////////////////////////////////////////', responseJson)
  return responseJson
    })
 .catch((error) => console.error('error in catch ----------',error))
 return actionArray

}