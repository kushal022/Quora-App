import React from 'react'
import '../styles/homePage.css'
import QuestionBox from '../components/QuestionBox'
import Space from '../components/Space'
import Advertisement from '../components/Advertisement'

function HomePage() {
    return (
        <main className='main-homePage'>
            <Space />
            <QuestionBox />
            <Advertisement />
        </main>
    )
}

export default HomePage
