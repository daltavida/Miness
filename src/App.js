import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const initialExpenses = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e2',
    title: 'Rent',
    amount: 800,
    date: new Date(2021, 7, 24),
  },
  {
    id: 'e3',
    title: 'Netflix',
    amount: 8.99,
    date: new Date(2021, 11, 15),
  },
  {
    id: 'e4',
    title: 'Spotify',
    amount: 5.99,
    date: new Date(2021, 3, 17),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
