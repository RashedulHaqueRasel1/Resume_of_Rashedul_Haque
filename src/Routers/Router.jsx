import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";

import 'animate.css';
import About from "../Pages/About/About";
import Skill from "../Pages/Skill/Skill";
import Project from "../Pages/Project/Project";
import Contact from "../Pages/Contact/Contact";
import Error from "./Error/Error";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'skill',
          element: <Skill></Skill>
        },
        {
          path: 'Project',
          element: <Project></Project>
        },
        {
          path: 'Contact',
          element: <Contact></Contact>
        },

      ]
    },
  ]);