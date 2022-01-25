import React from "react";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <>
      <div style={{ padding: "10px", background: "rebeccapurple" }}>
        <span style={{ color: "white" }}>Gatsby Site</span>
      </div>
      {children}
    </>
  );
};

export default Layout;
