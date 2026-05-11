import React from "react";
import * as eva from "eva-icons";

const OttoIcon = ({ name, size = 18, fill = "currentColor", className }) => {
  const icon = eva.icons[name];
  const svg = icon
    ? icon.toSvg({ width: size, height: size, fill })
    : eva.icons["alert-circle-outline"].toSvg({ width: size, height: size, fill });

  return (
    <span
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default OttoIcon;

