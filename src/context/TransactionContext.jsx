import { createContext, useState } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transaction, setTransaction] = useState([

  ]);

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });

  const dlt = (id) => {
    setTransaction(transaction.filter((item) => item.id !== id));
  };

  const addtransaction = (text, amount) => {
    setTransaction([
      { id: crypto.randomUUID(), text, amount: +amount },
      ...transaction,
    ]);
  };

  const editTransaction = (transaction) => {
    setEdit({ transaction: transaction, isEdit: true });
  };

  const updateTransaction = (updatedTransaction) => {
    setTransaction(
      transaction.map((trans) =>
        trans.id === updatedTransaction.id ? updatedTransaction : trans
      )
    );
    setEdit({
      transaction: {},
      isEdit: false,
    });
  };

  return (
    <TransactionContext.Provider
      value={{
        transaction,
        dlt,
        addtransaction,
        edit,
        editTransaction,
        updateTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
