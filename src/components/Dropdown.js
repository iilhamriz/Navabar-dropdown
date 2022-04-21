import React, { useState } from "react";
import Inggris from "./pngwing.png";
import Indonesia from "./indo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DropdownChild from "./DropdownChild";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const navLinks = [
    {
      name: "Mybets",
      notify: 5,
    },
    {
      name: "language",
      dropdownItem: [
        {
          dropdownName: "English",
          iconItem: Inggris,
        },
        {
          dropdownName: "Indonesia",
          iconItem: Indonesia,
        },
      ],
      onClick: () => setOpen(!open),
      open: open,
      arrow: open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />,
    },
    {
      name: "Type of odd",
      dropdownItem: [{ dropdownName: "Decimal" }],
      onClick: () => setOpen2(!open2),
      open: open2,
      arrow: open2 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />,
    },
  ];
  return (
    <div className="dropdown">
      {navLinks.map(
        ({ name, icon, dropdownItem, onClick, open, arrow, notify }) => (
          <div className="dropdown-item" onClick={onClick}>
            <div className="item">
              {icon ? <img className="icon-lang" src={icon} /> : <div></div>}
              <p className="dropdown-name">{name}</p>
              {notify && <div className="notify">{notify}</div>}
              {arrow}
            </div>
            {open &&
              dropdownItem.map((item) => (
                <DropdownChild
                  iconItem={item.iconItem}
                  dropdownName={item.dropdownName}
                />
              ))}
          </div>
        )
      )}
    </div>
  );
};

export default Dropdown;
