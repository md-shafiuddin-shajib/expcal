import React from "react";

const ExpenceCard = ({ exp, index }) => {
  const { price, description, purpose } = exp;
  return (
    <>
      <tr className="text-center text-sm">
        <td className="border py-2 text-zinc-600 border-gray-300">{index}</td>
        <td className="border py-2 text-zinc-600 border-gray-300">&#2547; {price}</td>
        <td className="border py-2 text-zinc-600 border-gray-300">{description}</td>
        <td className="border py-2 text-zinc-600 border-gray-300">{purpose==="expence"?<span className="bg-red-50 px-2 py-1 font-semibold text-red-700 rounded-4xl">{purpose}</span>:<span className="bg-green-50 px-2 py-1 font-semibold text-green-600 rounded-4xl">{purpose}</span>}</td>
        <td className="border py-2 text-zinc-600 border-gray-300"><button className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg hover:font-bold">Delet</button></td>
      </tr>
    </>
  );
};

export default ExpenceCard;
