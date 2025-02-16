import React, { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

const ListItem = ({transactions}) => {

  const { dlt, editTransaction } = useContext(TransactionContext)

  return (
    <li
      className={`w-[80%] md:w-[80%] sm:w-[90%] p-3 border border-gray-300 rounded-2xl shadow-xl my-2 flex flex-col sm:flex-row sm:justify-between items-center text-center sm:text-left ${transactions.amount > 0
        ? "bg-green-100" :  "bg-red-100"
      }`}


    >
      <div>
        <p className="text-lg font-bold mx-2">{transactions.text}</p>
        <h1 className="my-1 text-4xl">{transactions.amount}</h1>
      </div>
      <div className="flex mt-2 sm:mt-0">
        <button
          onClick={() => dlt(transactions.id)}
          className="mx-1 text-2xl cursor-pointer text-black text-red-500"
        >
          <i className="ri-delete-bin-6-line"></i>
        </button>
        <button
          onClick={() => editTransaction(transactions)}
          className="mx-1 text-2xl cursor-pointer text-black text-blue-500 rounded-xl"
        >
          <i className="ri-edit-box-line"></i>
        </button>
      </div>
    </li>
  );
};

export default ListItem;
