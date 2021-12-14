import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
