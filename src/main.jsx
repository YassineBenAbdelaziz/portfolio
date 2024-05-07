import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import ProjectDetails from './components/ProjectDetails.jsx'
import Contact from './components/Contact.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/projects",
        element : <Projects />  
      },
      {
        path : "/projects/:title",
        element : <ProjectDetails />
      },
      {
        path : "/contact",
        element : <Contact />
      }
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
