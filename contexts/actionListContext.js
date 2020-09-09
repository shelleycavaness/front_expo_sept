import React, {createContext, useState} from 'react';
import getActions from '../services/actions'

export const ActionListContext = createContext();

export default function ActionListProvider (props){
  const [actionsList, setActionsList] = useState([]);

//the value is an object and we want access to the list and the setter
 return <ActionListContext.Provider value={{ actionsList, setActionsList }}>
          { props.children }
        </ActionListContext.Provider>

}

