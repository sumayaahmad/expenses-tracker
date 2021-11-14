import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpensesContainer } from './components/IncomeExpensesContainer';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpensesContainer />
        <TransactionList />
      </GlobalProvider>
    </>
  );
}

export default App;
