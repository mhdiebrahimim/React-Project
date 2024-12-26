// import './App.css';

import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    title: 'airpods',
    amount: 10,
    date: new Date(2023, 11, 7),
    id: 'e1',
  },
  {
    title: 'cpu',
    amount: 8,
    date: new Date(2021, 10, 6),
    id: 'e2',
  },
  {
    title: 'computer',
    amount: 8,
    date: new Date(2021, 9, 15),
    id: 'e3',
  },
  {
    title: 'cell phone',
    amount: 18,
    date: new Date(2022, 8, 9),
    id: 'e4',
  },
  {
    title: 'laptop',
    amount: 8,
    date: new Date(2022, 7, 9),
    id: 'e5',
  },
  {
    title: 'car',
    amount: 8,
    date: new Date(2023, 3, 6),
    id: 'e6',
  },
  {
    title: 'book',
    amount: 8,
    date: new Date(2024, 2, 3),
    id: 'e7',
  },

]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const NewExpenseSaveHandler = enteredData => {
    setExpenses(prevExpenses => { return [enteredData, ...prevExpenses] });
  }

  return (

    <div className="App">

      <NewExpense onNewExpenseSave={NewExpenseSaveHandler} />
      <Expenses expenses={expenses} />

    </div>

  );
}

export default App;
