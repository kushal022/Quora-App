import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import FollowingPage from './pages/FollowingPage'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/following" element={<FollowingPage />} />
      </Routes>
    </>
  )
}

export default App
