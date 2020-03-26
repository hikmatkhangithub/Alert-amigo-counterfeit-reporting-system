/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
// import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";
import SignUpForm from "components/SignUpForm/SignUpForm.jsx";
import Logout from "components/Logout/Logout.jsx";
const dashboardRoutes = [
  {
    path: "/notifications",
    name: "Getting Started",
    icon: "pe-7s-home",
    component: Notifications,
    layout: "/admin"
  },
  // {
  //   path: "/signup",
  //   name: "SignUp Form",
  //   icon: "pe-7s-user",
  //   component: SignUpForm,
  //   layout: "/admin"
  // },

  {
    path: "/user",
    name: "Search",
    icon: "pe-7s-search",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Report",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "pe-7s-note2",
  //   component: TableList,
  //   layout: "/admin"
  // },

  {
    path: "/icons",
    name: "Status",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "All Alerts",
    icon: "pe-7s-bell",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/logout",
    name: "Log out",
    icon: "pe-7s-user",
    component: Logout,
    layout: "/admin"
  },

];

export default dashboardRoutes;
