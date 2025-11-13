import React from "react";

function FoodItems({ foodList }) {
  return (
    <>
      {foodList.map((item) => {
        return (
          <div
            key={item}
            className="w-full flex items-center justify-between border rounded p-1 my-2 border-gray-500 cursor-pointer"
          >
            <h1 className="text-green-800 font-medium text-xl">{item}</h1>
            <button
              className="rounded shadow px-4 py-1 bg-indigo-500 text-white cursor-pointer hover:bg-indigo-600 active:bg-red-500 "
              onClick={(e) => console.log(`${item} clicked`)}
            >
              Buy
            </button>
          </div>
        );
      })}
    </>
  );
}

export default FoodItems;
