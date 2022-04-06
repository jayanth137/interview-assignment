import {  AccountCircleOutlined,  ArticleOutlined, DisplaySettingsOutlined } from "@mui/icons-material";
import React from "react";
import "./sideNavbar.css";

const SideNavbar = () => {
  return (
    <div className="sidebarContainer">
    <div className="totalIcons">

      <div className="iconContainer">
        <AccountCircleOutlined className="icon" />
       </div>
        <div className="iconContainer">
        <AccountCircleOutlined className="icon" />
        </div>
        <div className="iconContainer">
        <AccountCircleOutlined className="icon" />
      </div>
        <div className="iconContainer">
        <DisplaySettingsOutlined className="icon" />
</div>
        <div className="iconContainer">

        <ArticleOutlined className="icon" />
      </div>
    </div>
    </div>
  );
};

export default SideNavbar;
