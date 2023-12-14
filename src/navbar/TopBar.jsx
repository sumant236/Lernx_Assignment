import React, { useState } from "react";
import Logo from "../assets/sphere_logo.png";
import ProfileImg from "../assets/profile_img.jpg";
import {
  BellOutlined,
  MailOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Avatar, Drawer, Input, Menu } from "antd";

// Top Navbar
const TopBar = ({ setSelectedMenuItem, menuList }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <div className="flex justify-between w-full">
      <div className="flex md:hidden sm:hidden">
        <img src={Logo} alt="icon" className="w-52 h-14" />
        <div className="bg-slate-300 h-14 w-px"></div>
      </div>
      {/* Menu in top navbar for small screens */}
      <div className="lg:hidden xl:hidden 2xl:hidden md:block sm:block">
        <MenuOutlined onClick={showDrawer} className="p-5" />
        <Drawer
          placement={"left"}
          closable={true}
          onClose={() => setOpen(false)}
          open={open}
          width={234}
        >
          <Menu
            style={{ width: 209 }}
            defaultSelectedKeys={["1"]}
            theme={"light"}
            items={menuList}
            onClick={(e) => {
              setSelectedMenuItem(e.key);
              setOpen(false);
            }}
          />
        </Drawer>
      </div>
      {/* top-right navbar */}
      <div className="flex justify-end items-center gap-4 pr-2 md:hidden sm:hidden">
        {/* for searching */}
        <Input
          size="large"
          prefix={<SearchOutlined />}
          className="h-10 w-72"
          placeholder="Search"
        />
        {/* for notifications */}
        <div className="border rounded-lg border-gray-300">
          <BellOutlined className="text-2xl p-2" />
        </div>
        {/* For alerts */}
        <div className="border rounded-lg border-gray-300">
          <MailOutlined className="text-2xl p-2" />
        </div>
        {/* user profile details */}
        <Avatar src={ProfileImg} />
      </div>
      {/* search icon for small screens */}
      <div className="lg:hidden xl:hidden 2xl:hidden md:block sm:block">
        <SearchOutlined className="p-5" />
      </div>
    </div>
  );
};

export default TopBar;
