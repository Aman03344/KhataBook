import React, { useContext } from "react";
import ListItem from "./ListItem";
import TransactionContext from "../context/TransactionContext";

const ListGroup = () => {

  const { transaction } =  useContext(TransactionContext)
  
  return (
    <ul className=" w-full h-auto flex flex-col justify-center items-center mt-5 my-2">
     {
      transaction.map((transactions)=> <ListItem key={transactions.id} transactions={transactions}/>)
     }
    </ul>
  );
};

export default ListGroup;
