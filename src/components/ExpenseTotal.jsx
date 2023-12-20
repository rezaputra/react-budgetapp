import React from "react"
import { useSelector } from "react-redux"

function ExpanseTotal() {
    const expenses = useSelector((state) => state.budget.expenses)
    const currency = useSelector((state) => state.budget.currency)

    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost
    }, 0)

    return (
        <div className="bg-blue-200 text-center  p-4 py-6 rounded-lg">
            <span className="text-lg  font-semibold">
                Total Expense: {currency} {totalExpenses}
            </span>
        </div>
    )
}

export default ExpanseTotal
