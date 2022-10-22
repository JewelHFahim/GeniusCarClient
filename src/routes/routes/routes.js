import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllNews from "../../Pages/AllNews/AllNews";
import Category from "../../Pages/Categories/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import TermsAndCondition from "../../Pages/Others/Terms&Condition/Terms&Condition";
import Profile from "../../Pages/Shared/Profile/Profile";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><News></News></PrivateRoute> ,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allnews',
        element: <PrivateRoute><AllNews></AllNews></PrivateRoute>,
      },
      {
        path: '/terms',
        element: <TermsAndCondition></TermsAndCondition>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      }
    ],
  },
]);
