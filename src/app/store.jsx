import { configureStore } from "@reduxjs/toolkit"
import budgetReducer from "../context/budgetSlice"

export default configureStore({
  reducer: {
    budget: budgetReducer,
  },
})
