import React from "react";
import cs from "classnames";

const Button = ({ onClick, className, children, ...res }) => {
  return (
    <button
      onClick={onClick}
      className={cs(
        "bg-indigo-600  active:bg-indigo-700 text-white shadow hover:shadow-md focus:outline-none ease-linear transition-all duration-150 min-h-[40px] flex items-center justify-center outline-none rounded-md px-5 font-semibold",
        { [className]: className }
      )}
      {...res}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
