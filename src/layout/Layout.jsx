import React from "react";
import TopBar from "../navbar/TopBar";
import LeftBar from "../navbar/LeftBar";

const Layout = () => {
  return (
    <div className="w-full">
      <TopBar />
      <LeftBar />
    </div>
  );
};

export default Layout;
