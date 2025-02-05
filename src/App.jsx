
import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
function App() {
 

  return (
    <div>
    <Nav></Nav>
    <Outlet/>
    <Footer></Footer>
    </div>
  )
}

export default App
