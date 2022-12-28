import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";
import styles from "./App.module.css";
import Root from "./components/Root/Root"
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

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
          element: <Home/>
        },
        {
         path:"/portfolio",
         element: <Portfolio/>
        },
        {
          path:"/contact",
          element: <Contact/>
        }
      ]
    }
   ])
 
  return (
   <RouterProvider router={router} />
  );
}

export default App;
