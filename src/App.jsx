import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Components/Layouts/LayoutOne'


function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element ={<LayoutOne />} >
      
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
