import React from 'react'

export const TransactionItem = ({transaction}) => {
    const sign = transaction.amount < 0 ? "-" : "+";
    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}> {/* class name changes depending on whether user has entered + or - sign */}
           Salary <span>+ 1000</span> 
           <button>x</button> {/* delete button */}
        </li>
    )
}
