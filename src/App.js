import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpensesContainer } from './components/IncomeExpensesContainer';
import { TransactionList } from './components/TransactionList';


function App() {
  return (
    <>
      <Header />
      <Balance />
      <IncomeExpensesContainer />
      <TransactionList />
    </>
  );
}

export default App;
