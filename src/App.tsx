import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink, useParams } from "react-router-dom";
import styles from "./App.module.css";
import Root from "./components/Root/Root"
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import ShoppingList from './components/Portfolio/ShoppingList/SoppingList';
import Filtering from './components/Portfolio/Filtering/Filtering';
import Interval from './components/Portfolio/Interval/Interval';
import Pokedex from './components/Portfolio/Pokemon/Pokedex';
import DadJoke from './components/Portfolio/DadJoke/DadJoke';
import Todo from './components/Portfolio/Todo/Todo';


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
          path: "/portfolio/shoppinglist",
          element: <ShoppingList />
        },
        {
          path: "/portfolio/filtering",
          element: <Filtering />
        },
        {
          path: "/portfolio/Interval",
          element: <Interval />
        },
        {
          path: "/portfolio/pokedex",
          element: <Pokedex />
        }
        ,
        {
          path: "/portfolio/dadjoke",
          element: <DadJoke />
        }
        ,
        {
          path: "/portfolio/todo",
          element: <Todo />
        }


      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
