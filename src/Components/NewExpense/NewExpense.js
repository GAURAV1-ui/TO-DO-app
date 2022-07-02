import React from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseHandeler = (enteredExpenseData) =>{
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      }; 
    console.log(enteredExpenseData);
      props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseHandeler}/>
        </div>
    );
}
export default NewExpense;