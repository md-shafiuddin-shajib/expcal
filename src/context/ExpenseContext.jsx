import { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {

  const [AllExpence, setAllExpence] = useState(JSON.parse(localStorage.getItem("expence")||'[]'));

  return (
    <ExpenseContext.Provider value={{AllExpence, setAllExpence}}>
{children}
    </ExpenseContext.Provider>
  )
};
