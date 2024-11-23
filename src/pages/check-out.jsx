import React from "react";
import { Button, Form, Input, Select, notification } from "antd";
import { paymentVNPAY } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { EnumPaymentMethod } from "../utils/EnumPaymentMethod";  // Import EnumPaymentMethod

const CheckOutPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Submitted Values:", values);
    const requestData = {
      orderId: values.orderId,
      paymentMethod: values.paymentMethod,
    };

    try {
      const res = await paymentVNPAY(requestData);

      if (res && res.data) {
        notification.success({
          message: "Payment Successful",
          description: `Redirecting to the payment page for order ${values.orderId}.`,
        });
        console.log(res.data)
        window.location.href = res.data;  
      } else {
        notification.error({
          message: "Payment Failed",
          description: "There was an issue with your payment. Please try again.",
        });
      }
    } catch (error) {
      console.error("Payment error:", error);

      // Handle error response
      notification.error({
        message: "Payment Failed",
        description: "There was an issue with your payment. Please try again.",
      });
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
          label="OrderId"
          name="orderId"
          rules={[
            {
              required: true,
              message: "Please input your orderId!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Method PAYMENT"
          name="paymentMethod"
          rules={[
            {
              required: true,
              message: "Please select a payment method!",
            },
          ]}
        >
          <Select placeholder="Select Payment Method">
            {Object.entries(EnumPaymentMethod).map(([key, value]) => (
              <Select.Option key={key} value={value}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Check out
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CheckOutPage;
