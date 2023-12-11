import React, { useState } from "react";
import TopBar from "../navbar/TopBar";
import LeftBar from "../navbar/LeftBar";
import HomePage from "./HomePage";
import ComingSoon from "../Components/ComingSoon";
import {
  AppstoreFilled,
  ContainerFilled,
  FundFilled,
  IeCircleFilled,
  UserOutlined,
} from "@ant-design/icons";

const Layout = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");

  const menuList = [
    { key: "1", icon: <AppstoreFilled />, label: "Home" },
    { key: "2", icon: <ContainerFilled />, label: "Job Invites" },
    { key: "3", icon: <FundFilled />, label: "Analytics" },
    { key: "4", icon: <UserOutlined />, label: "My Profile" },
    { key: "5", icon: <IeCircleFilled />, label: "Explore" },
  ];

  const componentSwitch = (key) => {
    switch (key) {
      case "1":
        return (
          <div className="bg-slate-100 h-full">
            <HomePage />
          </div>
        );
      case "2":
        return <ComingSoon />;
      case "3":
        return <ComingSoon />;
      case "4":
        return <ComingSoon />;
      case "5":
        return <ComingSoon />;
      default:
        break;
    }
  };
  return (
    <div className="w-full">
      <TopBar setSelectedMenuItem={setSelectedMenuItem} menuList={menuList} />
      <LeftBar
        componentSwitch={componentSwitch}
        selectedMenuItem={selectedMenuItem}
        setSelectedMenuItem={setSelectedMenuItem}
        menuList={menuList}
      />
    </div>
  );
};

export default Layout;
