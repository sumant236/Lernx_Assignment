import React from "react";
import Comment1 from "../../assets/comment1.avif";
import Comment2 from "../../assets/Comment2.jpg";
import Comment3 from "../../assets/Comment3.jpg";
import ProfileImg from "../../assets/profile_img.jpg";
import CommentExample from "../../assets/comment1_example.png";
import {
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
  LikeFilled,
  MehOutlined,
  PictureOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

// Posts for the user
const Posts = () => {
  return (
    <div className="p-4">
      <div className="flex items-start gap-3">
        <img src={Comment1} alt="comment1" className="w-10 h-8 rounded-full" />
        <div>
          <p className="text-sm font-bold">Karim Saif</p>
          <p className="text-xs text-slate-400">
            14 min ago on <span className="text-zinc-950">Figma Community</span>
          </p>
          <p className="text-sm">
            What is the reason guys, yesterday I uploaded same type of content
            and they approved it and today I tried to upload they say we no
            longer accept this
          </p>
        </div>
        {/* Edit / delete the post */}
        <div className="flex gap-3 cursor-pointer">
          <EditOutlined className="bg-[#1677FF] text-white p-1 rounded-full text-xs" />
          <DeleteOutlined className="bg-[#1677FF] text-white p-1 rounded-full text-xs" />
        </div>
      </div>
      <img src={CommentExample} />
      <div className="flex gap-12 p-3">
        {/* Like the post */}
        <div className="flex gap-3 text-[#1677FF]">
          <LikeFilled />
          <p className="text-xs">1,9k</p>
        </div>
        {/* Comment the post */}
        <div className="flex gap-3">
          <CommentOutlined />
          <p className="text-xs">45</p>
        </div>
        {/* share the post */}
        <SendOutlined />
      </div>
      <div className="border"></div>
      <div className="p-4">
        {/* thread by users on post*/}
        <div className="flex items-start gap-3">
          <img src={Comment2} alt="comment2" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm font-bold">Kashish Roy</p>
            <p className="text-sm">
              I love Northern Ireland and spent some of the very memorable days.
            </p>
            <div className="flex gap-4 ">
              <p className="text-xs text-slate-400">Like . 5</p>
              <p className="text-xs text-slate-400">Reply . 1 Reply</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start gap-3">
            <img
              src={Comment3}
              alt="comment3"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-bold">Suraj Deb</p>
              <p className="text-sm">I agree with this.</p>
              <div className="flex gap-4 p-4">
                <p className="text-xs text-slate-500 font-bold text-center cursor-pointer">
                  Load more comments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <img
            src={Comment1}
            alt="comment1"
            className="w-20 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-bold">Karim Saif</p>
            <p className="text-xs text-slate-400">
              14 min ago on{" "}
              <span className="text-zinc-950">Figma Community</span>
            </p>
            <p className="text-sm">
              Need some project that will earn me money. <br /> <br />I am a
              developer with around 13 years of experience. And recently my work
              doesn't inspire me much, feels not challenging to me. And I have
              lots of time to waste away. Don't judge me here, I read books, am
              a plant mom to loads of plants, but still feel too less mentally
              stimulated. I just love coding! Any help is really appreciated my
              fellow developers ❤️
            </p>
          </div>
          <div className="flex gap-3 cursor-pointer">
            <EditOutlined className="bg-[#1677FF] text-white p-1 rounded-full text-xs" />
            <DeleteOutlined className="bg-[#1677FF] text-white p-1 rounded-full text-xs" />
          </div>
        </div>
        <div className="flex gap-12 py-3 px-10">
          <div className="flex gap-3 text-[#1677FF]">
            <LikeFilled />
            <p className="text-xs">1,9k</p>
          </div>
          <div className="flex gap-3">
            <CommentOutlined />
            <p className="text-xs">45</p>
          </div>
          <SendOutlined />
        </div>
        <div className="border"></div>
      </div>
      {/* to add personal post */}
      <Input
        placeholder="Write a comment..."
        prefix={<img src={ProfileImg} className="w-5 h-5 rounded-full p-0" />}
        className="bg-slate-200 mx-1"
        bordered={false}
        suffix={
          <>
            <MehOutlined />
            <PictureOutlined />
          </>
        }
      />
      <p className="text-xs text-slate-500 font-bold cursor-pointer p-4">
        View all comments
      </p>
    </div>
  );
};

export default Posts;
