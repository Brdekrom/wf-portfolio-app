import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";
import styles from "./App.module.css";
import Root from "./components/Root/Root"
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import ShoppingList from './components/Portfolio/ShoppingList/SoppingList';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/portfolio/:id",
          element: <ShoppingList />
        }

      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
