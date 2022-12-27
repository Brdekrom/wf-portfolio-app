import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";
import styles from "./App.module.css";

const Root = () => {
  return (
      <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/" ></NavLink>
  )
}

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>
    }
   ])
 
  return (
   <RouterProvider router={router} />
  );
}

export default App;
