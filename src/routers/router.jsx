
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from '../Components/Hero'
import Register from '../Components/Register'




const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <Hero/> }/>    
       
        <Route path='/sign-up' element={ <Register/> }/>    

    </Routes>
</BrowserRouter>
  )
}

export default MyRoutes