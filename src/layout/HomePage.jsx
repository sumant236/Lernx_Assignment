import React from "react";
import CoverPhoto from "../assets/cover_photo.jpeg";
import { EditOutlined } from "@ant-design/icons";
import ProfileImg from "../assets/profile_img.jpg";
import Profiledetails from "../Components/Sections/Profiledetails";
import ProfileSection from "../Components/Sections/ProfileSection";

const HomePage = () => {
  return (
    <div>
      <img src={CoverPhoto} className="w-full h-44" />
      <div className="absolute top-16 right-4 bg-white rounded-full">
        <EditOutlined className="p-2" />
      </div>
      <img
        src={ProfileImg}
        className="rounded-full border-4 absolute top-36 left-64 w-44"
      />
      <div className="flex m-auto h-full">
        <ProfileSection />
        <Profiledetails />
      </div>
    </div>
  );
};

export default HomePage;
