import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { notification } from "antd";

const PaymentResultPage = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Processing...");
  const [orderId, setOrderId] = useState(null);
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    const paymentStatus = searchParams.get("vnp_ResponseCode");
    const orderId = searchParams.get("vnp_TxnRef");
    const amount = searchParams.get("vnp_Amount"); 

    if (paymentStatus === "00") {
      setStatus("Payment Successful!");
      notification.success({
        message: "Payment Success",
        description: `Your payment for order ${orderId} was successful.`,
      });
    } else {
      setStatus("Payment Failed!");
      notification.error({
        message: "Payment Failed",
        description: `Your payment for order ${orderId} failed. Please try again.`,
      });
    }

    // Cập nhật thông tin orderId và amount
    setOrderId(orderId);
    setAmount(amount);
  }, [searchParams]);

  return (
    <div>
      <h2>Payment Status: {status}</h2>
      <p>Order ID: {orderId}</p>
      <p>Amount: {amount ? (parseInt(amount) / 100).toFixed(2) : "N/A"}</p> 
    </div>
  );
};

export default PaymentResultPage;
