import React from "react";
import TopBar from "../navbar/topBar";
import LeftBar from "../navbar/leftBar";

const Layout = () => {
  return (
    <div className="w-full">
      <TopBar />
      <LeftBar />
    </div>
  );
};

export default Layout;
