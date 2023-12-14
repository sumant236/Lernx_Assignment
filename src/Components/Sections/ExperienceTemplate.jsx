import { BookFilled, EditOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Experience from "../Modal/Experience";

// Experience template
const ExperienceTemplate = ({
  experience,
  setExperience,
  exp,
  setAddExperience,
  index,
}) => {
  const [editExperience, setEditExperience] = useState(false);

  return (
    <div className="flex gap-3">
      <BookFilled className="bg-sky-200 h-8 text-[#1677FF] p-2 rounded-full" />
      <div className="flex-1">
        <p className="font-bold">{exp.company}</p>
        <p className="text-slate-500 text-xs">{`${exp.from} - ${exp.to}`}</p>
        <p className="text-slate-300 text-xs">{exp.location}</p>
        <p className="text-[13px]">{exp.description}</p>
      </div>
      <div className="flex gap-3">
        {index === 0 && (
          <PlusOutlined
            className="text-white bg-[#1677FF] p-1 rounded-full h-5 w-5 cursor-pointer"
            onClick={() => setAddExperience((prev) => !prev)}
          />
        )}
        <EditOutlined
          className="bg-[#1677FF] text-white p-1 rounded-full text-xs h-5 cursor-pointer"
          onClick={() => setEditExperience((prev) => !prev)}
        />
      </div>
      <Experience
        experience={experience}
        setExperience={setExperience}
        exp={exp}
        openExperience={editExperience}
        setOpenExperience={setEditExperience}
        updateExperience={editExperience}
      />
    </div>
  );
};

export default ExperienceTemplate;
