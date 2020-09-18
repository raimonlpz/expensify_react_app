import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`} >
            <h3>{description}</h3>
        </Link>
        <p>Amount: ${amount} | Created At: {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }))
        }}>X</button>
    </div>
)

export default connect()(ExpenseListItem)