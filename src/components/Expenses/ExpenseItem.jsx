import ExDate from './ExDate';
import './ExpenseItem.css';
import Card from '../UI/Card';


const ExpenseItem = (prop) => {

    return (
        <li>
            <Card className="expense-item">
                <ExDate inYear={prop.date} ></ExDate>
                <div className="expense-item__description">
                    <h2>{prop.title}</h2>
                    <div className="expense-item__price">${prop.amount}</div>
                </div>
            </Card>
        </li>
    );

}

export default ExpenseItem;