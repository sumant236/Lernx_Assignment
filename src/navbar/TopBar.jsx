import React from "react";
import Logo from "../assets/sphere_logo.png";
import ProfileImg from "../assets/profile_img.jpg";
import { BellOutlined, MailOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";

const TopBar = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex">
        <img src={Logo} alt="icon" className="w-52 h-14" />
        <div className="bg-slate-300 h-14 w-px"></div>
      </div>
      <div className="flex justify-end items-center gap-4 pr-2.5">
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
    </div>
  );
};

export default TopBar;
