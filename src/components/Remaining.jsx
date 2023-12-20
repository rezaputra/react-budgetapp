import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"

function Remaining() {
    const budget = useSelector((state) => state.budget.value)
    const expenses = useSelector((state) => state.budget.expenses)
    const currency = useSelector((state) => state.budget.currency)

    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost
    }, 0)

    useEffect(() => {
        if (budget - totalExpenses < 0) {
            toast.warn("Cannot increase the allocation! Out of funds")
        }
    }, [budget, totalExpenses])

    return (
        <div className="bg-green-200 text-center p-4 py-6 rounded-lg">
            <span className="text-lg font-semibold">
                Remaining: {currency} {budget - totalExpenses}
            </span>
        </div>
    )
}

export default Remaining
