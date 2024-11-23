import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { getProductById } from "../utils/api";

const OrderPage = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await getProductById(productId);
        if (res && res.data) {
          setProduct(res.data);
        }
      } catch (error) {
        console.error("Error fetching product details: ", error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      <h1>Order Product</h1>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default OrderPage;
