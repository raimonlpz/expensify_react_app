const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //return state.concat(action.expense)
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
            });
        // const expenseToEdit = state.filter(({ id }) => id == action.id)[0]
        // const newExpenseEdited = { ...expenseToEdit, ...action.updates }
        // return [...state.filter((e) => e !== expenseToEdit), newExpenseEdited]
        default:
            return state
    }
}

export default expensesReducer