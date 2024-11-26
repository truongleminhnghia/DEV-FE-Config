import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/CSS/global.css";
import "./styles/CSS/main.css";
import "./styles/CSS/reset.css";
import "./index.css"
import "antd/dist/reset.css";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JSa
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import RegisterPage from "./pages/register.jsx";
import UserPage from "./pages/user.jsx";
import HomePage from "./pages/home.jsx";
import LoginPage from "./pages/login.jsx";
import OrderPage from "./pages/order.jsx";
import CheckOutPage from "./pages/check-out.jsx";
import PaymentResultPage from "./pages/payment-result.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <HomePage/>
//       },
//       {
//         path: "user",
//         element: <UserPage />,
//       },
//     ],
//   },
//   {
//     path: "register",
//     element: <RegisterPage />,
//   },
//   {
//     path: "login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/order/:productId",
//     element: <OrderPage/>
//   },
//   {
//     path: "checkout",
//     element: <CheckOutPage/>
//   },
//   {
//     path: "payment-result",
//     element: <PaymentResultPage/>
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
