import React, { useContext } from "react";
import AllExpence from "./AllExpence";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenceCard from "./ExpenceCard";

const ListExpence = () => {
  const { AllExpence } = useContext(ExpenseContext);
  return (
    <>
      <table className="mt-10 w-full border table-auto my-10 py-3">
        <thead>
        <tr>
          <th className="border text-zinc-600 border-gray-300">No</th>
          <th className="border text-zinc-600 border-gray-300">Price</th>
          <th className="border text-zinc-600 border-gray-300">Description</th>
          <th className="border text-zinc-600 border-gray-300">Purpose</th>
          <th className="border text-zinc-600 border-gray-300">Action</th>
        </tr>
        </thead>
        <tbody>
          
          {AllExpence.length ==0 ? <tr className="text-center">
            <td colSpan={5} className="py-5 border border-gray-300 text-gray-700">No Expence Found</td></tr>
          :
            AllExpence.map((exp,i)=>(
              <ExpenceCard key={exp.id??i} exp={exp} index={i+1}/>
            ))
          }
          
        </tbody>
      </table>
    </>
  );
};

export default ListExpence;
