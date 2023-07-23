import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Log/Login";
import SignUp from "../Log/SignUp";
import CollegeDetail from "../Home/collegeDetail";
import Colleges from "../Colleges/Colleges";

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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/collegesPage',
                element: <Colleges></Colleges>,
                
            },
            {
                path: '/colleges/:id',
                element: <CollegeDetail></CollegeDetail>,
                loader: ({params}) => fetch(`https://dream-college-server.vercel.app/colleges/${params.id}`)
            }
        ]
    },
]);

export default router;