import React from "react";
import Navbar from "./components/Navbar";
import Formm from "./components/Formm";
import Dashboard from "./components/Dashboard";
import ListGroup from "./components/ListGroup";
import { TransactionProvider } from "./context/TransactionContext";

const App = () => {
  return (
    <TransactionProvider>
      <Navbar />
      <Formm />
      <Dashboard />
      <ListGroup />
    </TransactionProvider>
  );
};

export default App;
