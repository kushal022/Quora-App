import React, { useEffect, useState } from 'react'
import '../styles/postCard.css'
import { FcButtingIn } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { IoChatbubbleOutline } from "react-icons/io5";
import { TiArrowSync } from "react-icons/ti";


function PostCard() {
    const [exp, setExp] = useState(false);
    const [photo, setPhoto] = useState([]);

    const handleExpClick = () => {
        setExp(!exp);
    }

    useEffect(() => {
        fetch('https://fakestoreapiserver.reactbd.com/photos')
            .then(response => response.json())
            .then(data => setPhoto(data))
    }, [])

    return (

        <main className='postCardContainer'>
            <p className="promoted">Promoted by this company</p>
            <div className="profile-icon-post-card-box">
                <FcButtingIn className='profile-icon-post-card' />
            </div>
            <div className="user-detail-post-card">
                <h3>User name</h3>
                <span>&middot;</span>
                <Link className='follow-link'>Follow</Link>
                <p>User Detail, Where does he/she belong?</p>
            </div>
            <div className="post-content-post-card">
                <h2>Post Title</h2>
                <p style={{ display: exp ? "block" : "-webkit-box" }}>
                    This is the content of the post. content of the post.content of the post.content of the post. content of the post. content of the post. e content of the post. e content of the post. e content of the post. e content of the post. e content of the post. It could be a question, answer, or discussioncontent of the post. e content of the post. e content of the post. e content of the post. e content of the post. e content of the post. e content of the post. e content of the post. e content of the post. e content of the post. e content of the post. It could be a question, answer, or discussion.</p>
                <button className='extend-para'
                    style={{ display: exp ? "none" : "block" }}
                    onClick={handleExpClick}>(more)</button>
            </div>
            <div className="post-card-img-box">
                <img src="../../public/spaces-img/spaceimg2.jpg" alt="Post Card Image" />
            </div>
            <div className="post-card-actions-box">
                <div className="upDownVote-box">
                    <button className='upVote-btn'>
                        <TbArrowBigUp className='upArrow-icon' />
                        <span>Upvote</span>
                        <span>&middot;</span>
                        <span>123K</span>
                    </button>
                    <button className='downVote-btn'><TbArrowBigDown /></button>
                </div>
                <button className='comment-btn'><IoChatbubbleOutline className='comment-icon' />140</button>
                <button className='share-btn'><TiArrowSync className='share-icon' />56</button>
            </div>
        </main>
    )
}

export default PostCard
