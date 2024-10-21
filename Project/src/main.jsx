import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from "./Layout";
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='gallery' element={<Gallery/>} />
      <Route path='about' element={<About/>}></Route>
      <Route path='*' element={<NotFound/>} />
    </Route>
  )
);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
