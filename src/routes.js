// Material Dashboard 2 React layouts
import Home from "layouts/Home";
import Food from "layouts/tables";
import Electronics from "layouts/billing";
import HomeFurniture from "layouts/rtl";
import Academic from "layouts/notifications";
import Fashion from "layouts/profile";
import Cart from "layouts/cart";
import OrdersOverview from './layouts/Home/components/OrdersOverview';

import Icon from "@mui/material/Icon";
import Login from "layouts/auth/Login";
import Logout from "layouts/auth/Logout";
import Register from "layouts/auth/Register";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "Home",
    icon: <Icon fontSize="small">Dashboard</Icon>,
    route: "/",
    component: <Home />,
  },
  {
    type: "collapse",
    name: "Food Items",
    key: "food",
    icon: <Icon fontSize="small">restaurant</Icon>,
    route: "/food",
    component: <Food />,
  },
  {
    type: "collapse",
    name: "Electronics Devices",
    key: "electronics",
    icon: <Icon fontSize="small">devices</Icon>,
    route: "/electronics",
    component: <Electronics />,
  },
  {
    type: "collapse",
    name: "Home & Furniture",
    key: "home-furniture",
    icon: <Icon fontSize="small">weekend</Icon>,
    route: "/home-furniture",
    component: <HomeFurniture />,
  },
  {
    type: "collapse",
    name: "Academic Materials",
    key: "academic",
    icon: <Icon fontSize="small">school</Icon>,
    route: "/academic",
    component: <Academic />,
  },
  {
    type: "collapse",
    name: "Fashion & Clothing",
    key: "fashion",
    icon: <Icon fontSize="small">checkroom</Icon>,
    route: "/fashion",
    component: <Fashion />,
  },
  {
    type: "route",
    name: "Shopping Cart",
    key: "cart",
    route: "/cart",
    component: <Cart />,
  },
  {
    type: "route",
    name: "Login",
    key: "login",
    route: "/login",
    component: <Login />,
  },
  {
    type: "route",
    name: "Create Account",
    key: "register",
    route: "/register",
    component: <Register />,
  },
  {
    type: "route",
    name: "Logout",
    key: "logout",
    route: "/logout",
    component: <Logout />,
  },
  {
    path: '/orders',
    element: <OrdersOverview />,
  },
];

export default routes;
