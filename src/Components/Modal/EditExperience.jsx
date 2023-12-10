import { Button, Checkbox, Form, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

const EditExperience = ({
  experience,
  editExperience,
  setEditExperience,
  handleDelete,
}) => {
  const [currentlyWorking, setCurrentlyWorking] = useState(
    experience.to === "Present" ? true : false
  );
  const [form] = Form.useForm();
  const startDate = experience.from.split(" ");
  const endDate = experience.to.split(" ");

  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = 2000; year <= currentYear; year++) {
    years.push(year);
  }

  return (
    <Modal
      title="Edit Experience"
      centered
      open={editExperience}
      onCancel={() => setEditExperience(false)}
      footer={[
        <div className="w-full flex justify-between">
          <Button
            key="back"
            className="flex-1"
            onClick={() => {
              setEditExperience(false);
              handleDelete();
            }}
          >
            Delete Experience
          </Button>
          <Button
            key="submit"
            className="flex-1 bg-[#1677FF]"
            type="primary"
            onClick={() => setEditExperience(false)}
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
            defaultValue={experience.company}
            onChange={(e) => (experience.company = e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Location">
          <Input
            placeholder="Please provide location of the company"
            defaultValue={experience.location}
            onChange={(e) => (experience.location = e.target.value)}
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox
            onChange={(e) => {
              setCurrentlyWorking(e.target.checked);
              experience.to = "";
            }}
            defaultChecked
          >
            I am currently working here
          </Checkbox>
        </Form.Item>
        <Form.Item label="Start Date">
          <div className="flex gap-7">
            <Select
              defaultValue={startDate[0]}
              onChange={(val) => {
                startDate.shift();
                startDate.unshift(val);
                experience.from = startDate.join(" ");
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
              defaultValue={startDate[1]}
              onChange={(val) => {
                startDate.pop();
                startDate.push(val);
                experience.from = startDate.join(" ");
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
                defaultValue={endDate[0]}
                onChange={(val) => {
                  endDate.shift();
                  endDate.unshift(val);
                  experience.from = endDate.join(" ");
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
                defaultValue={endDate[1]}
                onChange={(val) => {
                  endDate.pop();
                  endDate.push(val);
                  experience.from = endDate.join(" ");
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
            defaultValue={experience.description}
            onChange={(e) => (experience.description = e.target.value)}
            rows={4}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditExperience;
