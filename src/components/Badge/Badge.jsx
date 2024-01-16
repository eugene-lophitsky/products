import React from "react";
import PropTypes from "prop-types";
import "./badge.scss";

export default function Badge({ text }) {
  return <div className="badge">{text}</div>;
}

Badge.propTypes = {
  text: PropTypes.any,
};
