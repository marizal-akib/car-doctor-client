import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/sign-up',
            element: <SignUp></SignUp>
        },
      ]
    },
  ]);


  export default router;