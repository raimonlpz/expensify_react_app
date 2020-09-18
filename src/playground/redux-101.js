import { createStore } from 'redux'

// Action generators - function that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})
const resetCount = () => ({
    type: 'RESET'
})

// REDUCERS
// 1. Reducers ara pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

const subscription = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })
store.dispatch(incrementCount())
store.dispatch(resetCount())
// subscription.unsubscribe();
// this cuts the subscription down below, the last decrement dispatch will not console.log
store.dispatch(decrementCount({ decrementBy: 10 }))
store.dispatch(decrementCount())
store.dispatch(setCount({ count: 101 }))
// store.dispatch({
//     type: 'SET',
//     count: 101
// })



