import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { rows } from "../../Data";

const options = ["view", "edit", "delete"];

const ITEM_HEIGHT = 48;

export default function MenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <Link to="/user/:userId" style={{ textDecoration: "none" }}>
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Edit"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Link>
      </Menu>
    </div>
  );
}
