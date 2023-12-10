import { Button, Checkbox, Form, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

const AddExperience = ({
  experience,
  setExperience,
  addExperience,
  setAddExperience,
}) => {
  const [company, setCompany] = useState(experience.company);
  const [location, setLocation] = useState(experience.location);
  const [description, setDescription] = useState(experience.description);
  const [currentlyWorking, setCurrentlyWorking] = useState(true);
  const [form] = Form.useForm();
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");

  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = 2000; year <= currentYear; year++) {
    years.push(year);
  }

  return (
    <Modal
      title="Edit Experience"
      centered
      open={addExperience}
      onCancel={() => setAddExperience(false)}
      footer={[
        <div className="w-full flex justify-between">
          <Button
            key="back"
            className="flex-1"
            onClick={() => setAddExperience(false)}
          >
            Cancel
          </Button>
          <Button
            key="submit"
            className="flex-1 bg-[#1677FF]"
            type="primary"
            onClick={() => {
              const data = {
                company: company,
                location: location,
                from: `${startMonth} ${startYear}`,
                to: currentlyWorking ? "Present" : `${endMonth} ${endYear}`,
                description: description,
              };
              setExperience([...experience, data]);
              setAddExperience(false);
            }}
          >
            Save
          </Button>
        </div>,
      ]}
    >
      <Form form={form} layout="vertical" requiredMark>
        <Form.Item label="Company Name" required>
          <Input
            placeholder="Please enter company name"
            onChange={(e) => setCompany(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Location">
          <Input
            placeholder="Please provide location of the company"
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox
            onChange={(e) => {
              setCurrentlyWorking(e.target.checked);
            }}
            defaultChecked
          >
            I am currently working here
          </Checkbox>
        </Form.Item>
        <Form.Item label="Start Date">
          <div className="flex gap-7">
            <Select
              onChange={(val) => {
                setStartMonth(val);
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
              onChange={(val) => {
                setStartYear(val);
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
        {experience.to !== "Present" && currentlyWorking !== true && (
          <Form.Item label="End Date">
            <div className="flex gap-7">
              <Select
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
        <Form.Item label="Description" required>
          <TextArea
            placeholder="Desription of your work"
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddExperience;
