import { createBrowserRouter } from "react-router-dom";
import Layout01 from "./components/layouts/layout/Layout01";
import UserPage from "./pages/user";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout01 />,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: 'user',
                element: <UserPage />
            }
        ]
    },
    {
        path: 'login',
        element: <LoginPage />
    },
    {
        path: 'register',
        element: <RegisterPage/>
    }
]);

export default router;