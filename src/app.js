import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
//import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore()
// store.subscribe(() => {
//const state = store.getState()
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//console.log(visibleExpenses)
// })

store.dispatch(addExpense({
    description: 'Water bill',
    amount: 2002,
}))
store.dispatch(addExpense({
    description: 'Gas bill',
    createdAt: 1500,
    amount: 500
}))
store.dispatch(addExpense({
    description: 'Rent bill',
    amount: 202430,
    createdAt: 12222
}))


store.dispatch(setTextFilter('bill'))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
