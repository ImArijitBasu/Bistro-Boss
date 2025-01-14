import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome";
import Secret from "../Components/Secret";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "signup",
          element: <SignUp></SignUp>
        },
        {
          path: "secret",
          element: <Secret></Secret>
        },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '',
        element: <UserHome></UserHome>
      },
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      //! Admin routes
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome/></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems/></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems/></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem/></AdminRoute>,
        loader: ({params})=> fetch(`https://bistro-boss-server-psi-indol.vercel.app/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      }
    ]
  }
]);
