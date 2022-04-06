import { AddBoxOutlined, ChevronLeft } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./userDetails.css";

const UserDetails = (props) => {
  return (
    <div className="userDetails">
      <div className="userHeader">
        {" "}
        <span>VIEW</span>
        <span className="edit">EDIT</span>
        <span>ORDER HISTORY</span>
        <span>ANALYTICS</span>
      </div>
      <div>
        <div>
          <Avatar
            className="userAvatarIcon"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 128, height: 128 }}
          />
        </div>
        <form className="formControl">
          <div className="nameContainer">
            <label className="labelUser">
              First Name <br />
              <input className="userInput" placeholder="" type="text"></input>
            </label>
            <label className="labelUser">
              Last Name
              <br />
              <input className="userInput" placeholder="" type="text"></input>
            </label>
          </div>
          <div className="emailMobile">
            <label className="labelUser">
              Mobile Number
              <br />
              <input className="userInput" placeholder="" type="tel"></input>
            </label>
            <label className="labelUser">
              Email Address
              <br />
              <input className="userInput" placeholder="" type="email"></input>
            </label>
          </div>
          <div className="footerUser">
            <label className="labelUser">
              Address <AddBoxOutlined className="userAddIcon" />
              <br />
              <input
                className="userInputFoot "
                placeholder=""
                type="text"
              ></input>
            </label>
            <label className="labelUser">
              Credit Card <AddBoxOutlined className="userAddIcon" />
              <br />
              <input
                className="userInputFoot"
                placeholder=""
                type="text"
              ></input>
            </label>
            <label className="labelUser" id="notes">
              Notes
              <br />
              <input
                className="userInputFoot"
                placeholder=""
                type="number"
              ></input>
            </label>
          </div>
        </form>
      </div>
      <div className="userButton">
        <div id="backToCon">
          <ChevronLeft /> Back to customer list
        </div>
        <button className="buttonCon"> Create Order</button>
        <button className="buttonCon"> Edit Profile</button>
      </div>
    </div>
  );
};

export default UserDetails;
