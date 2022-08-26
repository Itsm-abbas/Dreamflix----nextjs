import React from "react";

const Footer = () => {
  const style = {
    height: "4rem",
    width: "100%",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position:'absolute',
    bottom:'0'
  };
  return (
    <footer style={style}>
      <p>Dreamflix &copy; Project</p>
    </footer>
  );
};

export default Footer;
