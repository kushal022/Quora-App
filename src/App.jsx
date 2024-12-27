import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import FollowingPage from './pages/FollowingPage'
import NotificationPage from './pages/NotificationPage'
import AnswerPage from './pages/AnswerPage'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/following" element={<FollowingPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/answer" element={<AnswerPage />} />
      </Routes>
    </>
  )
}

export default App
