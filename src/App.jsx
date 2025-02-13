import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Formm from "./components/Formm";
import Dashboard from "./components/Dashboard";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [transaction, setTransaction] = useState([
 
  ]);

  const dlt = (id) => {
    setTransaction(transaction.filter((item) => item.id !== id));
  };

  const addtransaction = (text, amount) => {
    setTransaction([{ id: crypto.randomUUID(), text, amount : +amount }, ...transaction]);
  };

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });

  const editTransaction = (transaction) => {
    setEdit({ transaction: transaction, isEdit: true });
  };

  const updateTransaction = (updatedTransaction) => {
      setTransaction(transaction.map((trans)=>trans.id === updatedTransaction.id ? updatedTransaction :trans))
      setEdit({
        transaction:{}, isEdit: false
      })
  
  };

  return (
    <>
      <Navbar />
      <Formm
        addtransaction={addtransaction}
        edit={edit}
        updateTransaction={updateTransaction}
      />
      <Dashboard transaction={transaction} />
      <ListGroup
        transaction={transaction}
        dlt={dlt}
        editTransaction={editTransaction}
      />
    </>
  );
};

export default App;
