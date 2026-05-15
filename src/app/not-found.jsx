import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        
        <h1 className="text-7xl font-bold text-cyan-500">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mt-3">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2">
          The page you are looking for does not exist.
        </p>

        <Link href="/">
          <button className="mt-6 inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition">
            <FaHome />
            Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default NotFound;