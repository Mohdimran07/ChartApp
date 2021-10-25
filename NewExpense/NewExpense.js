import React  from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react/cjs/react.development';

const NewExpense = (props) => {
    const[isChange, setIsChange] = useState(false);

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setIsChange(false);
    };
   const startChangingHandler = () => {
       setIsChange(true)
   }

     const stopEditingHandler = () => {
        setIsChange(false);
     }
    return( <div className="new-expense">
        {!isChange && <button onClick={startChangingHandler}>Add New Expenses</button>}

        {isChange && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
    );
}

export default NewExpense;