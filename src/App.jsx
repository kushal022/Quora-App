import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import FollowingPage from './pages/FollowingPage'
import NotificationPage from './pages/NotificationPage'
import AnswerPage from './pages/AnswerPage'
import { useState } from 'react'

function App() {
  const [isOpenAddQusCard, setIsOpenAddQusCard] = useState(false);
  const [isOpenPremiumCard, setIsOpenPremiumCard] = useState(false);
  const [initialCard, setInitialCard] = useState('addQusCard');


  return (
    <>
      <NavBar
        isOpenAddQusCard={isOpenAddQusCard}
        setIsOpenAddQusCard={setIsOpenAddQusCard}
        isOpenPremiumCard={isOpenPremiumCard}
        setIsOpenPremiumCard={setIsOpenPremiumCard}
        initialCard={initialCard}
        setInitialCard={setInitialCard}
      />
      <Routes>
        <Route path="/" element={<HomePage
          isOpenAddQusCard={isOpenAddQusCard}
          setIsOpenAddQusCard={setIsOpenAddQusCard}
          initialCard={initialCard}
          setInitialCard={setInitialCard}
        />} />
        <Route path="/following" element={<FollowingPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/answer" element={<AnswerPage />} />
      </Routes>
    </>
  )
}

export default App
