import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";
import styles from "./App.module.css";
import Root from "./components/Root/Root"
import HomePage from './components/HomePage/HomePage';

// const Root = () => {
//   return (
//       <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/" ></NavLink>
//   )
// }

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "",
          element: <HomePage/>
        }
      ]
    }
   ])
 
  return (
   <RouterProvider router={router} />
  );
}

export default App;
