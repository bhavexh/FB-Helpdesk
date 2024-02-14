import React from "react";

export const InputBox = () => {
  return (
    <div className="mx-4">
      <div className="mb-6">
        <label
          htmlFor="default-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Default input
        </label>
        <input
          placeholder="Enter your message here..."
          type="text"
          id="default-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
      </div>
    </div>
  );
};
