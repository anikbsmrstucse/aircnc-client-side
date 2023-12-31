import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [{
      path: '/',
      element: <Home></Home>
    }],
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'signup',
    element: <Signup></Signup>
  }
])
