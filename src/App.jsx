import { Outlet } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Nav />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
