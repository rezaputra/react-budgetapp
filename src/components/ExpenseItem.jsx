import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addExpense, deleteExpense } from "../context/budgetSlice"

function ExpenseItem(props) {
    const currency = useSelector((state) => state.budget.currency)
    const dispatch = useDispatch()

    const handleIncreaseAllocation = () => {
        dispatch(addExpense({ name: props.name, cost: 10 }))
    }

    const handleDecreaseAllocation = () => {
        dispatch(addExpense({ name: props.name, cost: -10 }))
    }

    const handleDeleteExpense = () => {
        dispatch(deleteExpense(props.id))
    }

    return (
        <tr key={props.id} className="border-b border-gray-200">
            <td className="pl-10 py-2">{props.name}</td>
            <td className="px-4 py-2 text-center">
                {currency} {props.cost}
            </td>
            <td className="px-4 py-2 text-center">
                <button
                    onClick={handleIncreaseAllocation}
                    className="px-3 py-1 bg-green-500 text-white rounded-lg focus:outline-none font-bold"
                >
                    +
                </button>
            </td>
            <td className="px-4 py-2 text-center">
                <button
                    onClick={handleDecreaseAllocation}
                    className="px-3 py-1 justify-center items-center bg-red-500 text-white rounded-lg focus:outline-none font-bold"
                >
                    -
                </button>
            </td>
            <td className="px-4 py-2 text-center">
                <button
                    onClick={handleDeleteExpense}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md focus:outline-none"
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ExpenseItem
