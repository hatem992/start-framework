
import './App.css'
import Portofolio from './pages/portofolio/Portofolio.jsx'
import About from './pages/About/About.jsx'
import Contacts from './pages/Contacts/Contacts.jsx'
import Home from './pages/Home/Home.jsx'
import Error404 from './pages/404/404.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'



function App() {
const routes = createBrowserRouter([
  {path:"/" , element:<Layout/> ,children:[
    {path:"about", element:<About/>},
    {path:"portofolio" , element:<Portofolio/>},
    {path:"contact",element:<Contacts/>},
    {index:true , element:<Home/>},
    {path:"*" , element:<Error404/>}
  ]}
])

  return (
    <>

<RouterProvider router={routes}/>

    </>
  )
}

export default App
