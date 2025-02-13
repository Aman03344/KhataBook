import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({transaction, dlt,editTransaction}) => {
    // console.log(transaction)
  return (
    <ul className=" w-full h-auto flex flex-col justify-center items-center mt-5 my-2">
    
     {
      transaction.map((transactions)=> <ListItem key={transactions.id} transactions={transactions} dlt={dlt} editTransaction={editTransaction} />)
     }  
    </ul>
  );
};

export default ListGroup;
