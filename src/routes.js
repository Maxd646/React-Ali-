// Material Dashboard 2 React layouts
import Home from "layouts/Home";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";

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
    route: "/Dashboard",
    component: <Home />,
  },
  {
    type: "collapse",
    name: "Food Items",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Electronics device",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Books",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/rtl",
    component: <RTL />,
  },
  {
    type: "collapse",
    name: "Academics materials",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "cloth",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
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
];

export default routes;
