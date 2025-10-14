import React from "react";

function Input({ inputType, handleOnChange, handleFoodItem }) {
  return (
    <>
      <div className="flex w-full">
        <input
          className="w-[80%] bg-gray-200 p-2 rounded outline-0"
          type={inputType}
          placeholder="Enter healthy Food"
          onChange={handleOnChange}
        />
        <button
          onClick={handleFoodItem}
          className="w-[20%] rounded text-white bg-green-600  py-2 active:bg-gray-500"
        >
          Add
        </button>
      </div>
    </>
  );
}

export default Input;
