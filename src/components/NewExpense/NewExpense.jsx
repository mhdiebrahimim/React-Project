import React, { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';
import Card from '../UI/Card';

const NewExpense = (props) => {

    const NewExpenseFormSaveHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString(),
        }
        props.onNewExpenseSave(expenseData);

    }

    const addExpenseClickHandler = (event) => {
        event.preventDefault()
        setVeiwer(xSet);
    }

    const cancelClickHandler = (event) => {
        event.preventDefault();
        setVeiwer(x);
    }
    let x = (<div className='inner'> <button className='button' onClick={addExpenseClickHandler} > addExpenses</button > </div >)
    let xSet = (
        <Card>
            <NewExpenseForm onNewExpenseFormSave={NewExpenseFormSaveHandler} />
            <div>
                <button className='button' onClick={cancelClickHandler}>Cancel</button>
            </div>
        </Card>
    )

    const [veiwer, setVeiwer] = useState(x);

    return (
        <div className='container-div'>

            {veiwer}

        </div>
    );
}

export default NewExpense;