import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const AllExpence = () => {
  const {AllExpence} = useContext(ExpenseContext);
  const calCulateMoney = (purpose) =>{
    const exp = AllExpence.filter((exp)=>exp.purpose ===purpose).map((exp)=>parseInt((exp.price))).reduce((pre, cur)=>pre +cur, 0);
    return exp;
  }
  
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 '>
      <div className="lg:w-[80%] w-[96%] mx-auto py-5 px-3 rounded border border-gray-300 mt-5">
        <p className='font-extrabold text-xl text-green-400 '>Income</p>
        <p className='text-3xl font-black text-end text-green-600'>&#2547; {calCulateMoney("income")}</p>
      </div>
      <div className="lg:w-[80%] w-[96%] mx-auto py-5 px-3 rounded border border-gray-300 mt-5">
        <p className='font-extrabold text-xl text-red-500 '>Expense</p>
        <p className='text-3xl font-black text-end text-red-600'>&#2547; {calCulateMoney("expence")}</p>
      </div>
    </div>
    </>
  )
}

export default AllExpence