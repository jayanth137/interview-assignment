import { Toolbar, Typography } from "@mui/material";
import React from "react";
import "./topnavbar.css";
import { AddBox } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

const TopNavbar = () => {
  return (
    <div>
      <div className="navbarContainer">
        <Toolbar className="toolbarContainer">
          <div className="header">
            <Typography variant="h5" component="div">
              Customers
            </Typography>
          </div>

          <div className="TopLeft">
            <div className="SearchIconWrapper">
              <SearchIcon className="SearchIcon" />

              <input
                type="search"
                placeholder="try 'marris lewis'"
                className="InputContainer"
              ></input>
            </div>{" "}
            <div className="ButtonContainer">
              <button className="Button">
                <AddBox className="Addbox" />
                Add contacts
              </button>
            </div>
          </div>
        </Toolbar>
      </div>
    </div>
  );
};

export default TopNavbar;
