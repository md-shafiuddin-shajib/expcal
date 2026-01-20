import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import Swal from "sweetalert2";
import UpdateExpence from "./UpdateExpence";

const ExpenceCard = ({ exp, index }) => {
  const { AllExpence, setAllExpence } = useContext(ExpenseContext);
  const deletExpence = (id) => {
    const newExp = AllExpence.filter((data) => data.id !== id);
    setAllExpence(newExp);
    localStorage.setItem("expence",JSON.stringify(newExp));
    Swal.fire({
  title: "Success!",
  text: "Expence deleted successfully!",
  icon: "success"
});
  };
  const { price, description, purpose } = exp;
  return (
    <>
      <tr className="text-center text-sm">
        <td className="border py-2 text-zinc-600 border-gray-300">{index}</td>
        <td className="border py-2 text-zinc-600 border-gray-300">
          &#2547; {price}
        </td>
        <td className="border py-2 text-zinc-600 border-gray-300">
          {description}
        </td>
        <td className="border py-2 text-zinc-600 border-gray-300">
          {purpose === "expence" ? (
            <span className="bg-red-50 px-2 py-1 font-semibold text-red-700 rounded-4xl">
              {purpose}
            </span>
          ) : (
            <span className="bg-green-50 px-2 py-1 font-semibold text-green-600 rounded-4xl">
              {purpose}
            </span>
          )}
        </td>
        <td className="border py-2 text-zinc-600 border-gray-300 w-37.5 space-x-3">
           
            <UpdateExpence exp = {exp}/>
          <button
            className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg hover:font-bold text-end transition duration-300 ease-in-out"
            onClick={() => deletExpence(exp.id)}
          >
            Delet
          </button>
        </td>
      </tr>
    </>
  );
};

export default ExpenceCard;
