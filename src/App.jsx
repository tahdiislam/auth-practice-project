import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import LoginPage from './Component/LoginPage'
import Register from './Component/Register'
import Main from './Layour/Main'

const router = createBrowserRouter([
  {path: '/', element: <Main/>, children: [
    {path: '/', element: <Home/>},
    {path: '/login', element: <LoginPage/>},
    {path: 'register', element: <Register/>},
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
