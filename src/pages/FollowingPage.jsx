import React from 'react'
import '../styles/followingPage.css'
import QuestionBox from '../components/QuestionBox'
import Space from '../components/Space'
import PostCard from '../components/PostCard'
import Advertisement from '../components/Advertisement'
import QusCompo from '../components/QusCompo'




function FollowingPage(props) {
    const { isOpenAddQusCard, setIsOpenAddQusCard, initialCard, setInitialCard } = props.dataVar;

    return (
        <main className='main-following-page'>
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
                <QusCompo />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <div className='right-section'>

            </div>
        </main>
    )
}

export default FollowingPage
