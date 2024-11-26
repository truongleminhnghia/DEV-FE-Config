import React from "react";
import { Button, Form, Input, notification } from "antd";
import { createUserApi } from "../utils/api";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-xl text-center text-black font-semibold">
          Register Form
        </h1>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Email"
            className="mb-3"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input className="w-full" />
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
            <Input.Password className="w-full" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </Form.Item>
        </Form>
        <p className="text-sm font-normal text-black text-center">
          You have account?
          <Link to='/login' className="text-blue-500"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
