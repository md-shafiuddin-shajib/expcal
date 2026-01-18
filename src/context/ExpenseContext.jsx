import { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {

  const [AllExpence, setAllExpence] = useState([]);

  return (
    <ExpenseContext.Provider value={{AllExpence, setAllExpence}}>
{children}
    </ExpenseContext.Provider>
  )
};
