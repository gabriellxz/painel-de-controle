import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard.tsx'
import Stock from './pages/Stock/Stock.tsx'
import Categories from './pages/Stock/Categories/Categories.tsx'
import Login from './pages/Login/Login.tsx'
import Register from './pages/Register/Register.tsx'
import Users from './pages/Users/Users.tsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "estoque", element: <Stock /> },
      { path: "categorias", element: <Categories /> },
      { path: "usuários", element: <Users /> }
    ],
  },
  { path: "signIn", element: <Login /> },
  { path: "signUp", element: <Register /> }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
