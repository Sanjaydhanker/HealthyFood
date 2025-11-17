import React from "react";

function ErrorMassege({ foodItems }) {
  return (
    <>
      {foodItems.length == 0 && (
        <h3 className="text-center text-danger">I am still Hungry</h3>
      )}
    </>
  );
}

export default ErrorMassege;
