import React from "react";
import PropTypes from "prop-types";
import Cn from "classnames";

export default function Button({
  backgroundColor,
  primary,
  size,
  children,
  ...props
}) {
  const isPrimary = primary ? "button--primary" : "button--secondary";
  const classNames = Cn("button", isPrimary, `button--${size}`);

  return (
    <button
      style={backgroundColor && { backgroundColor }}
      type="button"
      className={classNames}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
