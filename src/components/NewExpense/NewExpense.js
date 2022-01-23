import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const newExpenseData = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const toggleEditing = () => {
    setEditing((oldState) => {
      return !oldState;
    });
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={toggleEditing}>Add new expense</button>}
      {isEditing && (
        <ExpenseForm onCancel={toggleEditing} onNewExpense={newExpenseData} />
      )}
    </div>
  );
};

export default NewExpense;
