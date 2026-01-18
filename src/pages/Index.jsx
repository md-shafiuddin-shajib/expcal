import React from "react";
import Navbar from "../components/Navbar";
import AddExpence from "../components/AddExpence";
import AllExpence from "../components/AllExpence";
import ListExpence from "../components/ListExpence";

const index = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-5">
        <AddExpence />
        {/* <AllExpence/>
   <ListExpence/> */}
      </main>
    </>
  );
};

export default index;
