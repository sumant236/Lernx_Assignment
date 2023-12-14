import React from "react";
import CoverPhoto from "../assets/cover_photo.jpeg";
import { EditOutlined } from "@ant-design/icons";
import ProfileImg from "../assets/profile_img.jpg";
import Profiledetails from "../Components/Sections/Profiledetails";
import ProfileSection from "../Components/Sections/ProfileSection";

// Homepage of the website
const HomePage = () => {
  return (
    <div>
      <img src={CoverPhoto} className="w-full h-44" />
      <div className="absolute top-16 right-4 bg-white rounded-full">
        <EditOutlined className="p-2" />
      </div>
      <img
        src={ProfileImg}
        className="rounded-full border-4 absolute top-36 left-64 w-44 sm:left-1/4 md:left-1/3 lg:inset-x-1/2"
      />
      <div className="flex m-auto h-full lg:flex-col md:flex-col sm:flex-col">
        <ProfileSection />
        <Profiledetails />
      </div>
    </div>
  );
};

export default HomePage;
