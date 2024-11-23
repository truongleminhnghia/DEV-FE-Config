import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { getAllProduct } from "../utils/api";

const HomePage = () => {
  const [formData, setFormData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate here

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Order",
      key: "order",
      render: (_, record) => (
        <Button type="primary" onClick={() => handleOrder(record)}>
          Order
        </Button>
      ),
    },
  ];

  const handleOrder = (product) => {
    // Navigate to the order page with the product ID in the URL
    navigate(`/order/${product.id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getAllProduct();
        if (res && res.data) {
          const data = res.data.map((item, index) => ({
            key: index.toString(),
            ...item,
          }));
          setFormData(data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Table columns={columns} dataSource={formData} loading={isLoading} />
    </div>
  );
};

export default HomePage;
