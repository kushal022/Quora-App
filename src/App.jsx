import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </>
  )
}

export default App
