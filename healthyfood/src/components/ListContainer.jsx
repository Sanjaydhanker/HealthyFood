import React, { Children } from "react";

function ListContainer(props) {
  return (
    <div className="h-screen w-full bg-gray-800 flex items-center justify-center">
      <div className="w-sm p-8 h-auto bg-indigo-200 rounded-xl shadow">
        {props.children}
      </div>
    </div>
  );
}

export default ListContainer;
