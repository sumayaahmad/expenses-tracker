import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransactionForm = () => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    return (
        <>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="text">Name</label>
                    <input type="text" className="form-control" placeholder="Enter name here" />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">(<b>-</b>/<b>+</b>)Amount &npsp; &npsp; [-expense, +income]</label>                                                                                                                                                           ';,m öó¬í'
                    <input type="number" placeholder="Enter amount" />
                </div>
                <button className="btn">Add</button>
            </form>
        </>
    )
}
