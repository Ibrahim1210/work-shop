import React from "react";

const SubmitButton: React.FC<any> = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 font-extrabold"
    >
      Submit
      {props.children}
    </button>
  );
};

export default SubmitButton;
