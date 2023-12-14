import { Button, Checkbox, Form, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";

// Modal to add/update experience of the user
const Experience = ({
  experience,
  setExperience,
  exp = { company: "", location: "", from: "", to: "", description: "" },
  openExperience,
  setOpenExperience,
  updateExperience,
}) => {
  const [company, setCompany] = useState(!updateExperience ? exp.company : "");
  const [location, setLocation] = useState(
    !updateExperience ? exp.location : ""
  );
  const [description, setDescription] = useState(
    !updateExperience ? exp.description : ""
  );
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState(
    exp.to === "Present" && !updateExperience ? true : false
  );
  const [form] = Form.useForm();

  // Get current year to add it in select year
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = 2000; year <= currentYear; year++) {
    years.push(year);
  }

  useEffect(() => {
    // if updating the experience -> split experience from and till date
    if (!updateExperience) {
      const fullStartDate = exp.from.split(" ");
      setStartMonth(fullStartDate[0]);
      setStartYear(fullStartDate[1]);

      const fullEndDate = exp.to.split(" ");
      setEndMonth(fullEndDate[0]);
      setEndYear(fullEndDate[1]);
    }
  }, []);

  return (
    <Modal
      title="Edit Experience"
      centered
      open={openExperience}
      onCancel={() => setOpenExperience(false)}
      footer={[
        updateExperience ? (
          <div className="w-full flex justify-between">
            {/* button to delete experience */}
            <Button
              key="back"
              className="flex-1"
              onClick={() => {
                // to filter the
                const deleteData = experience.filter(
                  (e) => e.company !== exp.company
                );
                setExperience(deleteData);
                setOpenExperience(false);
              }}
            >
              Delete Experience
            </Button>
            <Button
              key="submit"
              className="flex-1 bg-[#1677FF]"
              type="primary"
              onClick={() => {
                exp.company = company;
                exp.location = location;
                exp.from = `${startMonth} ${startYear}`;
                exp.to = currentlyWorking
                  ? "Present"
                  : `${endMonth} ${endYear}`;
                exp.description = description;
                setOpenExperience(false);
              }}
            >
              Save
            </Button>
          </div>
        ) : (
          <div className="w-full flex justify-between">
            {/* Cancel button of the modal*/}
            <Button
              key="back"
              className="flex-1"
              onClick={() => setOpenExperience(false)}
            >
              Cancel
            </Button>
            {/* Save button of the modal*/}
            <Button
              key="submit"
              className="flex-1 bg-[#1677FF]"
              type="primary"
              // Adding the data to existing exp
              onClick={() => {
                const data = {
                  company: company,
                  location: location,
                  from: `${startMonth} ${startYear}`,
                  to: currentlyWorking ? "Present" : `${endMonth} ${endYear}`,
                  description: description,
                };
                setExperience([...experience, data]);
                setOpenExperience(false);
              }}
            >
              Save
            </Button>
          </div>
        ),
      ]}
    >
      {/* form to add exp details */}
      <Form form={form} layout="vertical" requiredMark>
        <Form.Item
          label="Company Name"
          required
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            defaultValue={company}
            placeholder="Please enter company name"
            onChange={(e) => setCompany(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Location">
          <Input
            defaultValue={location}
            placeholder="Please provide location of the company"
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox
            onChange={(e) => {
              setCurrentlyWorking(e.target.checked);
              if (!e.target.checked) {
                setEndMonth("");
                setEndYear("");
              }
            }}
            defaultChecked={currentlyWorking}
          >
            I am currently working here
          </Checkbox>
        </Form.Item>
        <Form.Item label="Start Date">
          <div className="flex gap-7" required>
            <Select
              defaultValue={startMonth}
              onChange={(val) => {
                setStartMonth(val);
              }}
            >
              {/* List of months */}
              <Select.Option value="Jan">January</Select.Option>
              <Select.Option value="Feb">February</Select.Option>
              <Select.Option value="March">March</Select.Option>
              <Select.Option value="April">April</Select.Option>
              <Select.Option value="May">May</Select.Option>
              <Select.Option value="June">June</Select.Option>
              <Select.Option value="July">July</Select.Option>
              <Select.Option value="Aug">August</Select.Option>
              <Select.Option value="Sept">September</Select.Option>
              <Select.Option value="Oct">October</Select.Option>
              <Select.Option value="Nov">November</Select.Option>
              <Select.Option value="Dec">December</Select.Option>
            </Select>
            <Select
              defaultValue={startYear}
              onChange={(val) => {
                setStartYear(val);
              }}
            >
              {/* list of years from 2000 to current year */}
              {years.map((year) => (
                <Select.Option key={year} value={year}>
                  {year}
                </Select.Option>
              ))}
            </Select>
          </div>
        </Form.Item>
        {!currentlyWorking && (
          <Form.Item label="End Date" required>
            <div className="flex gap-7">
              <Select
                defaultValue={endMonth}
                onChange={(val) => {
                  setEndMonth(val);
                }}
              >
                <Select.Option value="Jan">January</Select.Option>
                <Select.Option value="Feb">February</Select.Option>
                <Select.Option value="March">March</Select.Option>
                <Select.Option value="April">April</Select.Option>
                <Select.Option value="May">May</Select.Option>
                <Select.Option value="June">June</Select.Option>
                <Select.Option value="July">July</Select.Option>
                <Select.Option value="Aug">August</Select.Option>
                <Select.Option value="Sept">September</Select.Option>
                <Select.Option value="Oct">October</Select.Option>
                <Select.Option value="Nov">November</Select.Option>
                <Select.Option value="Dec">December</Select.Option>
              </Select>
              <Select
                defaultValue={endYear}
                onChange={(val) => {
                  setEndYear(val);
                }}
              >
                {years.map((year) => (
                  <Select.Option key={year} value={year}>
                    {year}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </Form.Item>
        )}
        {/* TextArea for jo description */}
        <Form.Item label="Description" required>
          <TextArea
            defaultValue={description}
            placeholder="Desription of your work"
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Experience;
