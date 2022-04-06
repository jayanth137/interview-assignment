import React from "react";
import CardComponent from "../../components/cards/CardComponent";
import Revenue from "../../components/revenue/Revenue";
import SideNavbar from "../../components/sideNavbar/SideNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import SearchIcon from "@mui/icons-material/Search";
import "./user.css";
import Contacts from "../../components/contacts/Contacts";
import UserDetails from "../../components/userdetails/UserDetails";


const UserEdit = () => {
  return (
    <div>
      {" "}
      <div>
        <TopNavbar />
        <SideNavbar />
        <Revenue />
        <CardComponent />
      </div>
      <div className="userSearchIconWrapper">
        <SearchIcon className="userSearchIcon" />

        <input
          type="search"
          placeholder="try 'marris lewis'"
          className="userInputContainer"
        ></input>
      </div>
     <Contacts />
     <UserDetails/>

     </div>
    
  );
};

export default UserEdit;
