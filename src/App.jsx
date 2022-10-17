import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import LoginPage from './Component/LoginPage'
import Orders from './Component/Orders'
import Register from './Component/Register'
import Main from './Layour/Main'
import PrivateRoute from './routes/PrivateRoute'

const router = createBrowserRouter([
  {path: '/', element: <Main/>, children: [
    {path: '/', element: <Home/>},
    {path: '/home', element: <PrivateRoute><Home/></PrivateRoute>},
    {path: '/login', element: <LoginPage/>},
    {path: 'register', element: <Register/>},
    {path: '/orders', element: <PrivateRoute><Orders/></PrivateRoute>}
  ]}
])

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
