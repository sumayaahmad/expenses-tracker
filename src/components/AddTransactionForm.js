import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransactionForm = () => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();  // disable page reload on form submit
        
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            name,
            amount: +amount // add up to the previous amount
        };
        addTransaction(newTransaction); 
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}> {/* first onSubmit is built-in js, the second onSubmit, is the predefined function above */}
                <div className="form-group">
                    <label htmlFor="text">Name</label>
                    <input type="text" className="form-control" placeholder="Enter name here" onChange={(e) => {setName(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">(<b>-</b>/<b>+</b>)Amount &npsp; &npsp; [-expense, +income]</label>                                                                                                                                                           ';,m öó¬í'
                    <input type="number" placeholder="Enter amount" onChange={(e) => {setAmount(e.target.value)}} />
                </div>
                <button className="btn">Add</button>
            </form>
        </>
    )
}
