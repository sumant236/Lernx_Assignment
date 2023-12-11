import { PlusOutlined, TeamOutlined } from "@ant-design/icons";
import { Progress, Switch } from "antd";
import React from "react";
import DropBox from "../../assets/Dropbox_Icon.png";
import Gmail from "../../assets/Gmail_icon.png";
import Slack from "../../assets/slack-logo.png";

const ProfileSection = () => {
  return (
    <div className="text-center pt-24 px-4 max-w-[25%] bg-white lg:max-w-full md:max-w-full sm:max-w-full sm:px-2">
      <h3 className="text-xl font-bold">Ayaat Khanna</h3>
      <p className="text-slate-400 text-sm">UI/UX Designer</p>
      <div className="flex gap-2 alignt-center justify-center p-2">
        <TeamOutlined />
        <p className="text-xs">21 followers</p>
        <p className="text-xs">43 following</p>
      </div>
      <div className="flex justify-between align-center pt-2 pb-1">
        <p className="text-xs font-normal">
          Make my profile visible to employers
        </p>
        <Switch size="small" defaultChecked />
      </div>
      <p className="text-xs text-slate-400 text-left">
        Your profile and career goals will appear when employers search our
        database for candidates
      </p>
      <div className="flex justify-between align-center pt-8 pb-1">
        <p className="text-xs font-normal">Online Links</p>
        <PlusOutlined className="text-white bg-[#1677FF] p-px rounded-full" />
      </div>
      <p className="text-xs text-slate-400 text-left">
        Add your online portfolio links to increase your profile strength
      </p>
      <div className="flex px-16 py-4 bg-slate-100 m-4 justify-around">
        <img src={DropBox} className="w-7 h-5 px-1" />
        <img src={Gmail} className="w-7 h-5 px-1" />
        <img src={Slack} className="w-7 h-5" />
      </div>
      <div className="bg-slate-100 rounded-md border border-violet-200 py-4 sm:py-2">
        <p className="pb-3 sm:py-1">Wheel of Opportunities</p>
        <Progress
          type="circle"
          percent={40}
          format={() => (
            <>
              <p className="text-3lg text-violet-600">350</p>
              <p className="text-xs">Sphere Rating</p>
            </>
          )}
          strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
        />
      </div>
      <div className="pt-8 pb-1">
        <p className="text-xs font-normal">Your Ranking</p>
        <Progress
          percent={73}
          status="active"
          strokeColor={{
            from: "#108ee9",
            to: "#87d068",
          }}
          showInfo={false}
          className="m-0"
        />
        <p className="text-xs">
          Hurray! You are in the top{" "}
          <span className="text-lg text-[#108ee9]">27%</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
