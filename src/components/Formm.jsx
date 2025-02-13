import React, { useEffect, useState } from "react";

const Formm = ({ addtransaction, edit, updateTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSub = (e) => {
    e.preventDefault();
    if (edit.isEdit === true) {
      updateTransaction({ id: edit.transaction.id, text, amount: parseInt(amount) });
    } else {
      addtransaction(text, amount);
    }
    setText("");
    setAmount("");
  };

  useEffect(() => {
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);

  return (
    <div className="w-full h-auto flex justify-center items-center p-4">
      <form
        onSubmit={(e) => handleSub(e)}
        className="flex flex-col gap-3 w-[90%] md:w-[80%] sm:w-[60%] mt-5 border p-3 rounded-2xl"
      >
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="border border-gray-300 px-3 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1EB894] transition-all duration-300 ease-in-out"
          type="text"
          placeholder="Enter expense details"
          required
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          className="border border-gray-300 px-3 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1EB894] transition-all duration-300 ease-in-out"
          type="number"
          placeholder="Enter total income"
          required
        />

        <button className="bg-[#28c19d] text-white py-3 rounded-2xl font-semibold">
          Save Transaction
        </button>
      </form>
    </div>
  );
};

export default Formm;
