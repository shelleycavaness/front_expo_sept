import React, {createContext, useState, useEffect} from 'react';
import getCurrentUser from '../services/currentUser'

export const CurrentUserContext = createContext()


export default function CurrentUserProvider (props){
  const [currentPlayer, setCurrentPlayer] = useState({})  
  // useEffect(() => {
  //   async function getUserData(){
  //     return await getCurrentUser()  
  //   }  
  //   setCurrentPlayer( getUserData()) ///maybe a try catch
  // }, [])

  return <CurrentUserContext.Provider value={{currentPlayer, setCurrentPlayer}}>  
      {props.children}
      </CurrentUserContext.Provider>  

} 