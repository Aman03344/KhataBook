import { createContext, useReducer, useState } from "react";
import { TransactionReducer } from "./TransactionReducer";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  
const intialState = {
  transaction : [

  ],
  edit:{transaction : {} , isEdit: false}
}


const [ state, dispatch ] = useReducer(TransactionReducer,intialState)

  return (
    <TransactionContext.Provider value={{...state, dispatch}}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
