import React from "react";

function Logo({ width = "100px"}) {
  return (
    <img
      src="\logo.jpeg"
      className="mix-blend-multiply"
      width={width}
    />
  );
}

export default Logo;
