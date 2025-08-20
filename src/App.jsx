import React from 'react'
import Header from './components/header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Homes from './pages/home'
import About from './pages/about'
import User from './pages/user'

function App() {

  const route = createBrowserRouter([

    {
      path: "/", element: <Layout />,
      children: [
        { path: "/", element: <Homes /> },
        { path: "/about", element: <About /> },
        { path: "/user", element: <User /> }
      ]
    }

  ])




  return <RouterProvider router={route} />
}

export default App