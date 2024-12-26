import { useState } from 'react';
import './NewExpenseForm.css'

const NewExpenseForm = (props) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const expensData = {

            title: title,
            amount: amount,
            date: new Date(date),
        }

        props.onNewExpenseFormSave(expensData);

        setAmount('');
        setDate('');
        setTitle('');
    }

    return (

        <form onSubmit={formSubmitHandler} className='newExpense-form'>
            <div className='takeData-dives'>
                <label htmlFor="inputName">Enter the expense name</label>
                <input onChange={titleChangeHandler} value={title} className="input inputName" type="text" />
            </div>
            <div className='takeData-dives'>
                <label htmlFor="inputAmount">Enter the Amount</label>
                <input onChange={amountChangeHandler} value={amount} className="input inputAmount" type="number" min={0.1} step={0.1} />
            </div>
            <div className='takeData-dives'>
                <label htmlFor="inputDate" >Enter the date</label>
                <input onChange={dateChangeHandler} value={date} className="input inputDate" type="date" />
            </div>
            <div className='outer__submit__div'>
                <button type='submit' className='button'>Submit</button>
            </div>
        </form>

    );
}

export default NewExpenseForm;