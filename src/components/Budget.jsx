import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setBudget } from "../context/budgetSlice"

function Budget() {
    const budget = useSelector((state) => state.budget.value)
    const currency = useSelector((state) => state.budget.currency)
    const dispatch = useDispatch()

    const [newBudget, setNewBudget] = useState(budget)

    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value)
    }

    const handleBudgetUpdate = () => {
        dispatch(setBudget(parseInt(newBudget, 10)))
    }

    return (
        <div className="p-4 bg-blue-200 rounded-lg flex items-center justify-between">
            <span className="text-lg font-bold">Budget: {currency}</span>
            <input
                type="number"
                className="border w-1 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 ml-2 flex-grow"
                value={newBudget}
                onChange={handleBudgetChange}
                onBlur={handleBudgetUpdate}
            />
        </div>
    )
}

export default Budget
