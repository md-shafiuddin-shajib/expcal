import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center bg-gray-200/20 p-10 rounded-2xl">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Opps! Page Not Found.</p>
        <Link
          to="/"
          className="text-blue-700 font-black px-5 py-2 bg-amber-200 hover:bg-amber-300 rounded-md transition duration-300 ease-in-out"
        >
          Return to Home ▶
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
