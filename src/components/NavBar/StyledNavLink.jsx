import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export function StyledNavLink({ to, text }) {
  return (
    <NavLink
      className="link"
      to={to}
      style={({ isActive }) => {
        return {
          color: isActive ? "#939393" : "#333",
        };
      }}
    >
      {text}
    </NavLink>
  );
}

StyledNavLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};
