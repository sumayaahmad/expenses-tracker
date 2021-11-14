import React, {createContext, useReducer} from 'react';

// initial state
const InitialState = [
    {id: 1, name: "groceries", amount: -55},
    {id: 2, name: "salary", amount: 1000},
    {id: 2, name: "online course", amount: -10},
    {id: 2, name: "bills", amount: -70}
];

// create context - globally accessible
export const GlobalContext = createContext(InitialState);

// create provider component that will provide data
// provider component
// this provider will be global

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(InitialState)

    return (
        <GlobalContext.Provider>{children}</GlobalContext.Provider>
    )

}





