import React from "react";
type props = {
  color: string;
  message: string;
};
const ColoredMessage: React.FC<props> = ({ color, message }) => {
  const contentStyle = {
    color: color,
    fontSize: "20px",
  };
  return <p style={contentStyle}>{message}</p>;
};

export default ColoredMessage;
