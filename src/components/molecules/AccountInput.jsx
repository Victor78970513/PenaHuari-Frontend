import React from "react";
import "./AccountInput.css";
const AccountInput = ({ title, placeholder, onChange, value, name }) => {
  return (
    <div className="account-2-input-container">
      <span>{title}</span>
      <div className="account-input-container">
        <input
          style={{paddingLeft:"20px",paddingTop:"8px"}}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
        />
      </div>
    </div>
  );
};

export default AccountInput;
