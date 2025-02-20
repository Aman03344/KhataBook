import { createContext, useReducer, useState } from "react";
import { TransactionReducer } from "./TransactionReducer";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  
const intialState = {
  transaction : [
    {id: 1, text: "income", amount: 20000},
    {id: 2, text: "rent", amount: -3000},
    {id: 3, text: "food", amount: -2000}
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
