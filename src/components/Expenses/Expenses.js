import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');

  const filterChange = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear() === year * 1;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChange={filterChange} year={year} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
