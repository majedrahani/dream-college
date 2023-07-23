import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Log/Login";
import SignUp from "../Log/SignUp";
import CollegeDetail from "../Home/collegeDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/colleges/:id',
                element: <CollegeDetail></CollegeDetail>,
                loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
            }
        ]
    },
]);

export default router;