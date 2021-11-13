import React, {CreateContext, useReducer} from 'react';

// initial state
const initialState = [
    {id: 1, text: "groceries", amount: -55},
    {id: 2, text: "salary", amount: 1000},
    {id: 2, text: "online course", amount: -10},
    {id: 2, text: "bills", amount: -70}
];

// create context
export const GlobalConstant = createContext(initialState);

// create provider component that will provide data






