import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addExpense, reduceExpense } from "../context/budgetSlice"
import { toast } from "react-toastify"

const AllocationForm = () => {
    const currency = useSelector((state) => state.budget.currency)
    const expenses = useSelector((state) => state.budget.expenses)
    const budget = useSelector((state) => state.budget.value)
    const dispatch = useDispatch()

    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost
    }, 0)

    let remaining = budget - totalExpenses

    const [name, setName] = useState("Marketing")
    const [cost, setCost] = useState("")
    const [action, setAction] = useState("")

    const submitEvent = () => {
        if (cost > remaining) {
            toast.warning(
                `The value cannot exceed remaining funds £${remaining}`
            )
            // setCost("")
            return
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        }

        if (action === "Reduce") {
            dispatch(reduceExpense(expense))
        } else {
            dispatch(addExpense(expense))
        }
    }

    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center">
                <div className="mr-4">
                    <label
                        htmlFor="inputGroupSelect01"
                        className="mr-2 font-semibold"
                    >
                        Department
                    </label>
                    <select
                        id="inputGroupSelect01"
                        defaultValue={name}
                        onChange={(event) => setName(event.target.value)}
                        className="border p-2 rounded-md"
                    >
                        <option value="Marketing" name="marketing">
                            {" "}
                            Marketing
                        </option>
                        <option value="Sales" name="sales">
                            Sales
                        </option>
                        <option value="Finance" name="finance">
                            Finance
                        </option>
                        <option value="Human Resource" name="hr">
                            Human Resource
                        </option>
                        <option value="IT" name="it">
                            IT
                        </option>
                    </select>
                </div>
                <div className="mx-4">
                    <label
                        htmlFor="inputGroupSelect02"
                        className="mr-2 font-semibold"
                    >
                        Allocation
                    </label>
                    <select
                        id="inputGroupSelect02"
                        onChange={(event) => setAction(event.target.value)}
                        className="border p-2 rounded-md"
                    >
                        <option defaultValue value="Add" name="Add">
                            Add
                        </option>
                        <option value="Reduce" name="Reduce">
                            Reduce
                        </option>
                    </select>
                </div>
                <div className="mx-4">
                    <span className=" font-semibold mr-1">{currency} </span>
                    <input
                        required
                        type="number"
                        id="cost"
                        value={cost}
                        className="border p-2 rounded-md "
                        onChange={(event) => setCost(event.target.value)}
                    />
                </div>
                <div>
                    <button
                        onClick={submitEvent}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AllocationForm
