import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (

        <div className='container'>
            <div className='inside_container'>
                <label className='lable1'>Filtered by year</label>
                <select onChange={dropDownChangeHandler} value={props.selected}>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
        </div>

    );
}

export default ExpensesFilter;