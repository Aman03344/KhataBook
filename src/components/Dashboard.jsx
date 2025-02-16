import React, { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

const Dashboard = () => {

  const { transaction } = useContext(TransactionContext)

  const income = transaction
    .filter((transactions) => transactions.amount > 0)
    .reduce((a, c) => a + c.amount, 0);

  const expense = transaction
    .filter((transactions) => transactions.amount < 0)
    .reduce((a, c) => a + c.amount, 0);

  const balance = transaction.reduce((a, c) => a + c.amount, 0);

  return (
    <>
      <div className="w-full py-3 flex justify-center items-center">
        <div className="w-[60%] md:w-[80%] sm:w-[90%] flex flex-col sm:flex-row justify-between px-3 text-center sm:text-left">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <h1 className="font-bold text-xl">Total Transactions: {transaction.length}</h1>
        </div>
      </div>

      <div className="flex justify-center items-center mt-2 px-2">
        <div className="w-[80%] md:w-[80%] sm:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-white">
          <div className="p-4 bg-green-500 rounded-2xl text-center">
            <p className="font-bold mt-1">Total Income</p>
            <h1 className="text-3xl">{income}</h1>
          </div>
          <div className="p-4 bg-red-500 rounded-2xl text-center">
            <p className="font-bold mt-1">Expense</p>
            <h1 className="text-3xl">{expense}</h1>
          </div>
          <div className="p-4 bg-yellow-500 rounded-2xl text-center">
            <p className="font-bold mt-1">Total Balance</p>
            <h1 className="text-3xl">{balance}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;