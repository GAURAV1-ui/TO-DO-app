import React,{useState} from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItems";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');
  const filterHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
  };
    return(
    <Card className="expenses">
      <ExpensesFilter 
      select = {filteredYear}
      onChangeFilter={filterHandler}/>
      {props.items.map(expense => <ExpenseItem
      title = {expense.title}
      amount = {expense.amount} 
      date ={ expense.date} 
      />)}
      
    </Card>
    );
}
export default Expenses;
