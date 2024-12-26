import './ExDate.css';

function ExDate(prop) {

    const day = prop.inYear.toLocaleString('en-US', { day: '2-digit' });
    const month = prop.inYear.toLocaleString('en-US', { month: 'long' });
    const year = prop.inYear.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExDate;