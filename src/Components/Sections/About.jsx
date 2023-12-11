import { BookFilled, EditOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import EditProfSummary from "../Modal/EditProfSummary";
import EditExperience from "../Modal/EditExperience";
import AddExperience from "../Modal/AddExperience";

const About = () => {
  const [profSummary, setProfSummary] = useState(
    "The discovery was makde by Richard McClintock, a professor of Hampton-Sydney College in Virginia, who faced the impetuous recurrence of the dark word consectetur in the text Lorem ipsum researched its origins to identify them in sections 1.10.32 and 1.10.33 of the aforementione"
  );
  const [experience, setExperience] = useState([
    {
      company: "Chris Intervention Specialist",
      location: "Icoderz - Ahmedabad, India",
      from: "January 2023",
      to: "Present",
      description:
        "Work with clients and web studios as freelancer. Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.",
    },
  ]);
  const [education, setEducation] = useState([
    {
      course: "B.E - Electronics & telecommunication Engg.",
      from: "Aug 2015",
      to: "June 2019",
      college: "SBJIT - Nagpur, India",
    },
  ]);
  const [editSummary, setEditSummary] = useState(false);
  const [editExperience, setEditExperience] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [addEducation, setAddEducation] = useState(false);

  const deleteExperience = (exp) => {
    const data = experience.filter((e) => e.company === exp);
    setExperience(data);
  };

  return (
    <div className="bg-slate-100 h-[42rem] lg:h-full md:h-full sm:h-full">
      <div className="bg-white flex gap-2 p-2">
        <p className="text-slate-500 text-sm flex-1">{profSummary}</p>
        <EditOutlined
          className="bg-[#1677FF] text-white p-1 rounded-full text-xs h-5 cursor-pointer"
          onClick={() => setEditSummary((prev) => !prev)}
        />
      </div>
      <div className="flex items-center justify-between p-2">
        <p className="text-lg">Experience</p>
        {experience.length === 0 && (
          <PlusOutlined
            className="text-white bg-[#1677FF] p-1 rounded-full h-5 w-5 cursor-pointer"
            onClick={() => setAddExperience((prev) => !prev)}
          />
        )}
      </div>
      {experience.map((exp, index) => (
        <div key={index} className="bg-white flex p-2 gap-3">
          <BookFilled className="bg-sky-200 h-8 text-[#1677FF] p-2 rounded-full" />
          <div>
            <p className="font-bold">{exp.company}</p>
            <p className="text-slate-500 text-xs">{`${exp.from} - ${exp.to}`}</p>
            <p className="text-slate-300 text-xs">{exp.location}</p>
            <p className="text-[13px]">{exp.description}</p>
          </div>
          <div className="flex gap-3">
            <PlusOutlined
              className="text-white bg-[#1677FF] p-1 rounded-full h-5 w-5 cursor-pointer"
              onClick={() => setAddExperience((prev) => !prev)}
            />
            <EditOutlined
              className="bg-[#1677FF] text-white p-1 rounded-full text-xs h-5 cursor-pointer"
              onClick={() => setEditExperience((prev) => !prev)}
            />
          </div>
          <EditExperience
            experience={exp}
            editExperience={editExperience}
            setEditExperience={setEditExperience}
            handleDelete={() => deleteExperience(exp)}
          />
        </div>
      ))}
      <p className="text-lg p-2">Education</p>
      <div className="height-fit bg-white p-2">
        {education.map((educ, index) => (
          <div key={index} className="flex gap-3">
            <BookFilled className="bg-sky-200 h-8 text-[#1677FF] p-2 rounded-full" />
            <div className="flex-1">
              <p className="font-bold">{educ.course}</p>
              <p className="text-slate-500 text-xs">{`${educ.from} - ${educ.to}`}</p>
              <p className="text-slate-300 text-xs">{educ.college}</p>
            </div>
            <div className="flex gap-3">
              <PlusOutlined
                className="text-white bg-[#1677FF] p-1 rounded-full h-5 w-5 cursor-pointer"
                onClick={() => setAddEducation((prev) => !prev)}
              />
              <EditOutlined
                className="bg-[#1677FF] text-white p-1 rounded-full text-xs h-5 cursor-pointer"
                onClick={() => setEditEducation((prev) => !prev)}
              />
            </div>
          </div>
        ))}
      </div>
      <EditProfSummary
        setEditSummary={setEditSummary}
        editSummary={editSummary}
        profSummary={profSummary}
        setProfSummary={setProfSummary}
      />
      <AddExperience
        experience={experience}
        setExperience={setExperience}
        addExperience={addExperience}
        setAddExperience={setAddExperience}
      />
    </div>
  );
};

export default About;
