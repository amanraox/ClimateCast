import React from "react";
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from "react-icons/fa";
const SortBtn = ({ onclick, flag }) => {
  return (
    <button onClick={onclick} className="">
      <div className="mx-2 ">
        {flag && <FaSortAmountUpAlt />}
        {!flag && <FaSortAmountDownAlt />}
      </div>
    </button>
  );
};

export default SortBtn;
