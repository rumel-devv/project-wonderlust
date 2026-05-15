"use client";

import Link from "next/link";
import React from "react";
import { FaRedo, FaHome } from "react-icons/fa";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        
        <h1 className="text-6xl font-bold text-red-500">
          Oops!
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mt-3">
          Something went wrong
        </h2>

        <p className="text-gray-500 mt-2">
          An unexpected error has occurred. Please try again.
        </p>

        <div className="flex items-center justify-center gap-4 mt-6">
          
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
          >
            <FaRedo />
            Try Again
          </button>

          <Link href="/">
            <button className="flex items-center gap-2 border border-gray-300 hover:bg-gray-100 px-5 py-2 rounded-lg transition">
              <FaHome />
              Home
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;