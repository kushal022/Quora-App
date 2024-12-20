import React from 'react'
import '../styles/homePage.css'
import QuestionBox from '../components/QuestionBox'
import Space from '../components/Space'
import Advertisement from '../components/Advertisement'
import PostCard from '../components/PostCard'

function HomePage() {
    return (
        <main className='main-homePage'>
            <Space />
            <div className='middle-section'>
                <QuestionBox />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <Advertisement />
        </main>
    )
}

export default HomePage
