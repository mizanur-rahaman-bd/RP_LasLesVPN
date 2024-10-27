import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Components/Layouts/LayoutOne'
import Home from './Pages/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element ={<LayoutOne />} >
        <Route index element ={<Home />} />
      
      </Route>


    </Route>

  ))
  

  return (
    <>

    <RouterProvider router={myRoute} />

      
    
      
    </>
  )
}

export default App
