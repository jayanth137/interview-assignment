import React from 'react'
import { rows } from "../../Data";
import { Avatar } from "@mui/material";

const Contacts = () => {
  return (
    <div>
     <div>
        {rows.map(({ avatar, Mobile, firstName, lastName }) => (
          <div key={firstName} className="userEditContainer">
            <div className="avatarIcon">
              <Avatar src={avatar}  />
            </div>
            <div className="userName">
              {firstName} {lastName}
            </div>
            <div className="mobile">{Mobile}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contacts