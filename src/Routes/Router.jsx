import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Log/Login";
import SignUp from "../Log/SignUp";
import CollegeDetail from "../Home/collegeDetail";
import Colleges from "../Colleges/Colleges";
import Error from "../Error/Error";
import Admission from "../Admission/Admission";
import Apply from "../Admission/Apply";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
                path: '/admission',
                element: <Admission></Admission>,
                loader: ({params}) => fetch(`https://dream-college-server.vercel.app`)
                
            },
            {
                path: '/colleges/:id',
                element: <CollegeDetail></CollegeDetail>,
                loader: ({params}) => fetch(`https://dream-college-server.vercel.app/colleges/${params.id}`)
            },
            {
                path: '/apply/:id',
                element: <Apply></Apply>,
                loader: ({params}) => fetch(`https://dream-college-server.vercel.app/apply/${params.id}`)
            },
        ]
    },
]);

export default router;