import React, { useState } from 'react'
import '../styles/homePage.css'
import QuestionBox from '../components/QuestionBox'
import Space from '../components/Space'
import Advertisement from '../components/Advertisement'
import PostCard from '../components/PostCard'
import QusCompo from '../components/QusCompo'

function HomePage(props) {
    const { isOpenAddQusCard, setIsOpenAddQusCard, initialCard, setInitialCard } = props.dataVar;

    return (
        <main className='main-homePage'>
            <div className="left-section">
                <Space />
            </div>
            <div className='middle-section'>
                <QuestionBox
                    isOpenAddQusCard={isOpenAddQusCard}
                    setIsOpenAddQusCard={setIsOpenAddQusCard}
                    initialCard={initialCard}
                    setInitialCard={setInitialCard}
                />
                <PostCard />
                {/* <QusCompo /> */}
            </div>
            <div className='right-section'>
                <Advertisement />
            </div>
        </main>
    )
}

export default HomePage
