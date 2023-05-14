import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LogIn/Login";
import SingUp from "../Pages/SingUp/SingUp";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRouts from "./PrivateRouts";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/singup',
          element: <SingUp></SingUp>
        },
        {
          path:'book/:id',
          element:<PrivateRouts><BookService></BookService></PrivateRouts>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"bookings",
          element:<PrivateRouts><Bookings></Bookings></PrivateRouts>,
        }
      ]
    },
  ]);


  export default router