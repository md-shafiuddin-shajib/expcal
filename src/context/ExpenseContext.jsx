import { createContext } from "react";

export const ExpenseContext = createContext();

const initialState = {
  expenses: [],
  loading: false,
  error: null
};  


export const ExpenseProvider = ({ children }) => {

  return (
    <ExpenseContext.Provider value={{}}>
{children}
    </ExpenseContext.Provider>
  )
};
