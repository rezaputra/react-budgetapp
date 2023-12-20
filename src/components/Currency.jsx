import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeCurrency } from "../context/budgetSlice"

function Currency() {
    const dispatch = useDispatch()
    const currency = useSelector((state) => state.budget.currency)

    const handleCurrencyChange = (e) => {
        dispatch(changeCurrency(e.target.value))
    }

    return (
        <div className="flex items-center justify-center bg-yellow-200 p-4 py-5 rounded-lg">
            <label htmlFor="currency" className="mr-2 font-semibold">
                Currency:
            </label>
            <select
                name="currency"
                id="currency"
                onChange={handleCurrencyChange}
                className="border p-2 rounded-md bg-white"
            >
                <option value="£">Uk(£)</option>
                <option value="₹">India(₹)</option>
                <option value="€">Europe(€)</option>
                <option value="CAD">Canada(CAD)</option>
            </select>
        </div>
    )
}

export default Currency
