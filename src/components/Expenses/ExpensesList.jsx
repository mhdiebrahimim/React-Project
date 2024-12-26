import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

    if(props.filteredExpenses.length === 0) return (<p className='expenses_list__fallback' >No expense found</p>);
   

    return (
        <ul className="expenses_list">            
        {props.filteredExpenses.map(
            expense => (
                <ExpenseItem
                    key={expense.id}
                    amount={expense.amount}
                    title={expense.title}
                    date={expense.date}
                />
            )
        )} 
        </ul>
    );

}
 
export default ExpensesList;