import React from "react";
import { Button, Form, Input, notification } from "antd";
import { createUserApi } from "../utils/api";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const res = await createUserApi(values);
      console.log("res", res);
      if (res && res.data) {
        notification.success({
          message: res.message,
          description: "Success",
        });
        navigate("/login");
      } else {
        notification.error({
          message: res.message,
          description: "Failed",
        });
      }
      console.log(">>> Success:", res);
    } catch (error) {
      notification.error({
        message: "Test Error Message",
        description: "Failed",
      });
      console.log("error", error.message)
    }
  };
  return (
    <div style={{ margin: "50px" }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
