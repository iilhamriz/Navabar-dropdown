import React from "react";

const DropdownChild = ({ iconItem, dropdownName }) => {
  return (
    <div className="dropdown-child">
      {iconItem ? <img className="icon-lang" src={iconItem} /> : <div></div>}
      {dropdownName}
    </div>
  );
};

export default DropdownChild;
