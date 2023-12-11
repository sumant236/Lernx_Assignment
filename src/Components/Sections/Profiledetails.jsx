import { Menu } from "antd";
import React, { useState } from "react";
import ComingSoon from "../ComingSoon";
import About from "./About";
import Posts from "./Posts";

const Profiledetails = () => {
  const [current, setCurrent] = useState("about");

  const items = [
    {
      label: "About",
      key: "about",
    },
    {
      label: "Skills & Certificates",
      key: "skills",
    },
    {
      label: "Posts",
      key: "posts",
    },
    {
      label: "Spaces",
      key: "spaces",
    },
  ];

  const selectedComponent = (key) => {
    switch (key) {
      case "about":
        return <About />;
      case "skills":
        return <ComingSoon />;
      case "posts":
        return <Posts />;
      case "spaces":
        return <ComingSoon />;
      default:
        break;
    }
  };
  return (
    <div className="flex-1 bg-slate-100 h-full w-full">
      <div className="m-4 bg-white shadow-lg rounded-md sm:mt-1 sm:m-0 sm:w-full">
        <Menu
          onClick={(e) => setCurrent(e.key)}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        {selectedComponent(current)}
      </div>
    </div>
  );
};

export default Profiledetails;
