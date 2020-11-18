import AdminLogin from "views/AdminLogin";
import UserProfile from "views/UserProfile.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Logout from "components/Logout/Logout.jsx";

const dashboardRoutes = [       // sidebar Routes
  {
    path: "/notifications",
    name: "Getting Started",
    icon: "pe-7s-home",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Search",
    icon: "pe-7s-search",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Report",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Status",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "All Alerts",
    icon: "pe-7s-bell",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/AdminLogin",
    name: "Admin Dashboard",
    icon: "pe-7s-bell",
    component: AdminLogin,
    layout: "/admin",
  },
  {
    path: "/logout",
    name: "Log out",
    icon: "pe-7s-user",
    component: Logout,
    layout: "/admin",
  },
];

export default dashboardRoutes;
