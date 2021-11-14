import React from 'react'
import { TransactionItem } from './TransactionItem'
import { GlobalContext } from '../context/GlobalState'

export function TransactionList() {
    const {transactions} = useContext(GlobalContext);
    return (
        <div>
            <h3>Log</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}
