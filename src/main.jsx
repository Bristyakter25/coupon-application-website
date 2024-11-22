import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';

import Brand from './components/Brand';
import AuthLayout from './Layouts/AuthLayout';
import Login from './components/Login';
import Register from './components/REgister';
import AuthProvider from './provider/AuthProvider';
import Home from './components/Home';
import MyProfile from './components/MyProfile';
import ErrorPage from './components/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/my-profile',
        element:<MyProfile></MyProfile>
      },
      {
        path:'/brand',
        element:<Brand></Brand>
      },
      {
        path:'/',
        element:<Home></Home>
      }
      
    ]

  },
  {
    path:"auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path:"login",
        element: <Login></Login>
      },
      {
        path:"register",
        element: <Register></Register>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
  </StrictMode>,
)
