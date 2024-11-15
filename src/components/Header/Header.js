import React from "react";
import Menuicon from "../Menuicon";

const Header = ({ setcategory }) => {
  return (
    <div>
      <div className="inshorts-header">
        <div className="icon">
          <Menuicon setcategory={setcategory}></Menuicon>
        </div>
        <img
          style={{ cursor: "pointer", paddingTop: "0.5rem" }}
          src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png "
          height="80%"
          alt="inshorts-logo"
        />
      </div>
    </div>
  );
};

export default Header;
