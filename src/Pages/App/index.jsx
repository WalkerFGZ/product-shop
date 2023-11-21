import './App.css'

import { BrowserRouter, useRoutes } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NavBar from '../../Components/Navbar'
import NotFound from '../NotFound'
import { ShoppingCartProvider } from '../../Context'
import SignIn from '../SignIn'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/my-orders',
      element: <MyOrders />
    },
    {
      path: '/my-account',
      element: <MyAccount />
    },
    {
      path: '/my-order',
      element: <MyOrder />
    },
    {
      path: '/*',
      element: <NotFound />
    },
    {
      path: 'sign-in',
      element: <SignIn />
    }
  ])
  return routes
}


const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
