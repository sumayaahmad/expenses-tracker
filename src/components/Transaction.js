import React from 'react'

export const Transaction = () => {
    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="text">Label</label>
                    <input type="text" className="form-control" placeholder="Enter label here" />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">(<b>-</b>/<b>+</b>)Transaction Amount &npsp; &npsp; [-expense, +income]</label>                                                                                                                                                           ';,m öó¬í'
                    <input type="number" placeholder="Enter amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}
