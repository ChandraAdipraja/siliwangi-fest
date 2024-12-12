import { useState } from "react";

export const SearchName = () => {
  return (
    <div className="flex flex-col items-center mt-48 justify-center">
      <label className="block mb-2 text-lg text-center font-medium text-gray-900 dark:text-white">
        Cari Messages
      </label>
      <input
        type="search"
        id="name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder="Your Name"
        required
      />
    </div>
  );
};
