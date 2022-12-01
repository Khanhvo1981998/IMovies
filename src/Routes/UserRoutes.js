import HomePage from "../pages/HomePage/HomePage";
// import LoginPage from "../pages/LoginPage/LoginPage";
// import NotFound from "../pages/NotFound/NotFound";
// import RegisterPage from "../pages/RegisterPage/RegisterPage";
// import LayoutTheme from "../HOC/layout/LayoutTheme";
// import MovieDetailPage from "../pages/MovieDetailPage/MovieDetailPage";
// import PurchasePage from "../pages/PurchasePage/PurchasePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Detail from "../pages/Detail/Detail";
import Error from "../pages/Error/Error";
import TemplateTheme from "../templates/DetailTemplate/Template/TemplateTheme";
import Checkout from "../pages/Checkout/BookingSeats/Checkout";
import UserLoginTemplate from "../templates/UserTempalte/UserLoginTemplate";
import Contact from "../pages/Contact/Contact";
import DetailTemplate from "../templates/DetailTemplate/Template/DetailTemplate";
import Myseat from "../pages/Checkout/MySeat/Myseat";
export const userRoutes = [
    {
        path: "/",
        Element: <TemplateTheme Component={HomePage} />,
        exact: true,
    },
    {
        path: "/register",
        Element: <Register />,
    },
    {
        path: "/login",
        Element: <Login />,
    },

    {
        path: "/contact",
        Element: <Contact />,
    },

    // {
    //     path: "/checkout",
    //     Element: <TemplateTheme Component={Checkout} />,
    // },

    {
        path: "/checkout/:id",
        Element: <UserLoginTemplate Component={Checkout} />,
    },
    {
        path: "/myseat",
        Element: <UserLoginTemplate Component={Myseat} />,
    },
    {
        path: "/detail",
        Element: <TemplateTheme Component={Detail} />,
    },
    {
        path: "/detail/:id",
        Element: <DetailTemplate Component={Detail} />,
    },
    {
        path: "*",
        Element: <TemplateTheme Component={Error} />,
    },
];