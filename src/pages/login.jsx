import React from "react";
import { Button, Form, Input, notification } from "antd";
import { loginApi } from "../utils/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const res = await loginApi(values);
    if (res && res.data) {
    localStorage.setItem("access_token", res.data);
      notification.success({
        message: res.message,
        description: res.message,
      });
      navigate("/");
    } else {
      notification.error({
        message: res.message,
        description: res.message,
      });
    }
    console.log(">>> Success:", res);
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
          name="username"
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
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;