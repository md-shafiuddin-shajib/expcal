import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const AddExpence = () => {
  const [isHide, setIsHide] = useState(true);
  const {AllExpence, setAllExpence} = useContext(ExpenseContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const price = formData.get("price") || 0;
      const description = formData.get("description") || "";
      const purpose = formData.get("purpose") || "";
      console.log(price, description, purpose);
      if (!description || !purpose || price <= 0) {
        alert("Please fillup the form correctly");
        event.target.reset();
        return;
      }
      const exp = {
        price,
        description,
        purpose,
        created_at: new Date().toISOString(),
        id: Date.now(),
      };
      setAllExpence([...AllExpence, exp]);
      alert("Expence added successfully");
      
      event.target.reset();
    } catch (error) {
      console.error(error.message);
    }
    setIsHide(true);
  };
  useEffect(() => {
    console.log(AllExpence);
  }, [AllExpence]);
  return (
    <>
      <div className="mt-10 flex items-center justify-end ">
        <button
          onClick={() => setIsHide(!isHide)}
          className="px-3 py-2 bg-indigo-500 text-white font-bold rounded-md cursor-pointer hover:bg-indigo-600 hover:font-extrabold transform hover:scale-110 transition-all duration-300 flex items-center gap-1"
        >
          Add{" "}
          {isHide ? (
            <span className="text-2xl font-black text-green-300">+</span>
          ) : (
            <span className=" font-black text-red-400">x</span>
          )}
        </button>
      </div>
      {!isHide && (
        <div className="py-5">
          <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
              <label htmlFor="price">
                Price (in BDT)<sup className="text-red-600">*</sup>
              </label>
              <input
                type="number"
                className="w-full py-2 border border-gray-400 rounded outline-none px-2"
                placeholder="Enter Price"
                id="price"
                name="price"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description">
                Description<sup className="text-red-600">*</sup>
              </label>
              <textarea
                type="text"
                className="w-full py-2 border border-gray-400 rounded outline-none px-2"
                placeholder="Enter Description"
                id="description"
                name="description"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="purpose">
                Purpose<sup className="text-red-600">*</sup>
              </label>
              <select
                className="w-full py-2 border border-gray-400 rounded outline-none px-2"
                name="purpose"
                id="purpose"
                required
              >
                <option value="expence">Expence</option>
                <option value="income">Income</option>
              </select>
            </div>
            <div className="mb-3">
              <button
                className="w-full py-2 lg:py-3 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-800"
                type="submit"
              >
                Add Expence
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddExpence;
