import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
 

  return (
    <>
      <BrowserRouter>
      
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/navbar' element={<Navbar/>}  />
            <Route path='/about' element={<About/>}  />
            <Route path='/contact' element={<Contact/>}  />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
