import React from "react";
import {Form,Modal,Input} from "antd"
function modal() {
  return (
    <div>
      <Modal
        title={modalInfo.title}
        open={isModalOpen}
        // closeIcon={false}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form
          layout="inline"
          form={form}
         
         
        >
          <Form.Item label="Field A">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Field B">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default modal;
