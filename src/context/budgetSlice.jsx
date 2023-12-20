import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
    value: 2000,
    expenses: [
        { id: "Marketing", name: "Marketing", cost: 50 },
        { id: "Finance", name: "Finance", cost: 300 },
        { id: "Sales", name: "Sales", cost: 70 },
        { id: "HR", name: "HR", cost: 40 },
        { id: "IT", name: "IT", cost: 500 },
        { id: "Admin", name: "Admin", cost: 500 },
    ],
    currency: "£",
}

export const budgetSlice = createSlice({
    name: "budget",
    initialState: initialState,
    reducers: {
        addExpense: (state, action) => {
            let totalBudget = state.expenses.reduce(
                (previosExp, currentExp) => {
                    return previosExp + currentExp.cost
                },
                0
            )
            totalBudget += action.payload.cost

            if (totalBudget <= state.value) {
                state.expenses = state.expenses.map((currentExp) => {
                    if (currentExp.name === action.payload.name) {
                        currentExp.cost += action.payload.cost
                    }
                    return currentExp
                })
            } else {
                toast.warning("Cannot increase the allocation! aut of funds")
            }
        },
        deleteExpense: (state, action) => {
            state.expenses = state.expenses.map((currentExp) => {
                if (currentExp.name === action.payload) {
                    state.value += currentExp.cost
                    currentExp.cost = 0
                }
                return currentExp
            })
        },
        reduceExpense: (state, action) => {
            state.expenses = state.expenses.map((currentExp) => {
                if (
                    currentExp.name === action.payload.name &&
                    currentExp.cost - action.payload.cost >= 0
                ) {
                    currentExp.cost -= action.payload.cost
                    state.value += action.payload.cost
                }
                return currentExp
            })
        },
        setBudget: (state, action) => {
            state.value = action.payload
        },
        changeCurrency: (state, action) => {
            state.currency = action.payload
        },
    },
})

export const {
    addExpense,
    reduceExpense,
    deleteExpense,
    setBudget,
    changeCurrency,
} = budgetSlice.actions

export default budgetSlice.reducer
