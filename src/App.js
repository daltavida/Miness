import ExpenseItem from './components/ExpenseItem';

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

  return (
    <div>
      <h2>Let's goo</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
