import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'
function App() {


  return (
    <>
      <Analytics />
      <Nav />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
