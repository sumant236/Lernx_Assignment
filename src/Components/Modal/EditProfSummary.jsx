import React from "react";
import { Button, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";

const EditProfSummary = ({
  editSummary,
  profSummary,
  setProfSummary,
  setEditSummary,
}) => {
  const handleChange = (e) => {
    setProfSummary(e.target.value);
  };

  return (
    <Modal
      title="Edit About"
      centered
      open={editSummary}
      onCancel={() => setEditSummary(false)}
      footer={[
        <div className="w-full flex justify-between">
          <Button
            key="back"
            className="flex-1"
            onClick={() => {
              setProfSummary("");
              setEditSummary(false);
            }}
          >
            Delete About
          </Button>
          <Button
            key="submit"
            className="flex-1 bg-[#1677FF]"
            type="primary"
            onClick={() => setEditSummary(false)}
          >
            Save
          </Button>
        </div>,
      ]}
    >
      <TextArea
        value={profSummary}
        onChange={(e) => handleChange(e)}
        rows={4}
        className="overflow-auto"
      />
    </Modal>
  );
};

export default EditProfSummary;
