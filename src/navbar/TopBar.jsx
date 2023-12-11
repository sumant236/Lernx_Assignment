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
      <div className="flex justify-end items-center gap-4 pr-2 md:hidden sm:hidden">
        <Input
          size="large"
          prefix={<SearchOutlined />}
          className="h-10 w-72"
          placeholder="Search"
        />
        <div className="border rounded-lg border-gray-300">
          <BellOutlined className="text-2xl p-2" />
        </div>
        <div className="border rounded-lg border-gray-300">
          <MailOutlined className="text-2xl p-2" />
        </div>
        <Avatar src={ProfileImg} />
      </div>
      <div className="lg:hidden xl:hidden 2xl:hidden md:block sm:block">
        <SearchOutlined className="p-5" />
      </div>
    </div>
  );
};

export default TopBar;
