import { useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Budget from "./components/Budget"
import Remaining from "./components/Remaining"
import ExpenseTotal from "./components/ExpenseTotal"
import Currency from "./components/Currency"
import ExpansesList from "./components/ExpansesList"
import AllocationForm from "./components/AllocationForm"
import ExpanseTotal from "./components/ExpenseTotal"

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <ToastContainer />

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">
                    Company's Budget Allocation
                </h1>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                        <Budget />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                        <Remaining />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                        <ExpenseTotal />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                        <Currency />
                    </div>
                </div>
                <h3 className="text-2xl font-semibold mt-8 mb-4">Allocation</h3>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <ExpansesList />
                    </div>
                </div>
                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Change Allocation
                </h3>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
