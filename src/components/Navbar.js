import React, { useState } from "react";
import "../styles/navbar.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "./Dropdown";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="navbar1">
        <h3 className="logo">
          Easy<span style={{ color: "white" }}>Bet</span>
        </h3>
        <div className="right-content">
          <div className="right-wrapper">
            <p>Balance</p>
            <h3>IDR 87,995.56</h3>
          </div>
          <button>Deposit</button>
        </div>
      </nav>
      <nav className="navbar2">
        <p>
          Welcome <span style={{ fontWeight: "bold" }}>charlielpz7!</span>
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          <div className="dots">
            <SearchIcon />
          </div>
          <div className="dots" onClick={() => setOpen(!open)}>
            <MoreVertIcon />
          </div>
        </div>
      </nav>
      {open && <Dropdown />}
    </>
  );
};

export default HomePage;
