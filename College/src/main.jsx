import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Overview from './Components/About/Overview.jsx'
import Chairman from './Components/About/Chairman.jsx'
import Administration from './Components/About/Administration.jsx'
import Faculty from './Components/Academics/Faculty.jsx'

let router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/overview' element={<Overview/>}/>
      <Route path='/chairman' element={<Chairman/>}/>
      <Route path='/administration' element={<Administration/>}/>
      <Route path='/faculty' element={<Faculty/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
