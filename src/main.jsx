import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './Pages/mainPage/MainPage';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Career from './Pages/Career/Career';
import News from './Components/News/News';
import NewsPage from './Pages/NewsPage/NewsPage';
import HomeNews from './Components/HomeNews/HomeNews';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <HomeNews></HomeNews>,
            loader: () => fetch("/news.json"),
          },
          {
            path: "/news.json/:id",
            element: <News></News>,
            loader: () => fetch("/news.json"),
          },
        ],
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/newsDetails/:id",
        element: <NewsPage></NewsPage>,
        loader: ()=>fetch("/news.json")
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
