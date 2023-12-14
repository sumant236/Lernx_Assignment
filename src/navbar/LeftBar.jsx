import { Menu } from "antd";
import React, { useState } from "react";
import Image1 from "../assets/Indonesia_UI_Designer.png";
import Image2 from "../assets/Indonesia_UX_Research.png";
import Image3 from "../assets/Prototyping_club.png";
import Image4 from "../assets/Indonesia_UI_Designer2.png";

// Left Nav bar
const LeftBar = ({
  componentSwitch,
  selectedMenuItem,
  setSelectedMenuItem,
  menuList,
}) => {
  return (
    <div className="flex items-start">
      <div className="flex flex-col w-52 md:hidden sm:hidden">
        {/* Menu Items in left navbar to navigate*/}
        <Menu
          style={{ width: 209 }}
          defaultSelectedKeys={["1"]}
          theme={"light"}
          items={menuList}
          onClick={(e) => setSelectedMenuItem(e.key)}
        />
        {/* Communities feed */}
        <div className="bg-slate-300 h-px w-48 m-auto"></div>
        <p className="text-lg p-2 text-center">Communities feed</p>
        <div className="flex px-4 py-2 gap-2">
          <img src={Image1} className="w-8 " />
          <div className="flex flex-col">
            <p className="text-sm">Indonesia UI Designer</p>
            <p className="text-xs text-slate-400">734 members</p>
          </div>
        </div>
        <div className="flex px-4 py-2 gap-2">
          <img src={Image2} className="w-8 " />
          <div className="flex flex-col">
            <p className="text-sm">Indonesia UX Resear...</p>
            <p className="text-xs text-slate-400">125 members</p>
          </div>
        </div>
        <div className="flex px-4 py-2 gap-2">
          <img src={Image3} className="w-8 " />
          <div className="flex flex-col">
            <p className="text-sm">Prototyping Club</p>
            <p className="text-xs text-slate-400">891 members</p>
          </div>
        </div>
        <div className="flex px-4 py-2 gap-2">
          <img src={Image4} className="w-8 " />
          <div className="flex flex-col">
            <p className="text-sm">Indonesia UI Designer</p>
            <p className="text-xs text-slate-400">241 members</p>
          </div>
        </div>
        <p className="text-xs text-blue-600 text-center cursor-pointer">
          {"Show 5 more >"}
        </p>
      </div>
      <div className="w-px bg-slate-300"></div>
      {/* To show the selected Menu item */}
      <div className="flex-1 ">{componentSwitch(selectedMenuItem)}</div>
    </div>
  );
};

export default LeftBar;
