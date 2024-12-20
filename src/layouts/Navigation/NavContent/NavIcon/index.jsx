/* eslint-disable react/prop-types */
import React from "react";

// ==============================|| NAV ICON ||============================== //

const NavIcon = ({ items }) => {
  let navIcons = false;
  if (items.icon) {
    navIcons = (
      <span className="pcoded-micon">
        <i className={items.icon} />
      </span>
    );
  }

  return <React.Fragment>{navIcons}</React.Fragment>;
};

export default NavIcon;
