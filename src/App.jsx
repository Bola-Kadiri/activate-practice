import About from "./page/about/About"
import Contact from "./page/contact/Contact"
import Home from "./page/home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Services from "./page/services/Services"
import Blog from "./page/blog/Blog"
import Nav from "./component/nav/Nav"



const information = [
  {id: 1, first_name: 'Kadiri', last_name: "Jimoh", occupation: "Software Engineer"}, // <-- Added comma
  {id: 2, first_name: 'Oluwatosin', last_name: "Ogunsola", occupation: "Frontend Engineer"}, // <-- Added comma
  {id: 3, first_name: 'Aziz', last_name: "Oladunjoye", occupation: "Backend Engineer"}
]; // Added a semicolon for good practice

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Nav/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About last_name = 'Bola' age= '55'/>}/>
          <Route path='/contact' element={<Contact gender = 'male'/>}/>
          <Route path='/services' element={<Services information ={information}/>}/>
          <Route path='/blog' element={<Blog/>}/>
         </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App