import React from "react"
import { useSelector } from "react-redux"
import ExpenseItem from "./ExpenseItem"

function ExpansesList() {
    const expenses = useSelector((state) => state.budget.expenses)

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 ">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
                        >
                            Department
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
                        >
                            Allocated Budget
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
                        >
                            Increase by 10
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
                        >
                            Decrease by 10
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
                        >
                            Remove
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {expenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            id={expense.id}
                            name={expense.name}
                            cost={expense.cost}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExpansesList
