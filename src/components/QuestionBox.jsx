import React from 'react'
import { FcButtingIn } from "react-icons/fc";
import { GoPencil } from "react-icons/go";
import { RiQuestionnaireLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import '../styles/QuestionBox.css'
import { Link } from 'react-router-dom';

function QuestionBox(props) {
    const { isOpenAddQusCard, setIsOpenAddQusCard, setInitialCard } = props;

    // handle for Ask button:
    const handleAddQuestion = () => {
        setIsOpenAddQusCard(!isOpenAddQusCard)
        setInitialCard('addQusCard')
    }

    // handle for Post button:
    const handleCreatePost = () => {
        setIsOpenAddQusCard(!isOpenAddQusCard)
        setInitialCard("createPost")
    }

    return (
        <section className='QuestionBoxContainer'>
            <div className='qus-box'>
                <FcButtingIn className='profile-icon-qus-box' />
                <button className='qus-btn' onClick={handleAddQuestion} >What do you want to ask or share?</button>
            </div>
            <div className='btn-box'>
                <button className='ask-btn' onClick={handleAddQuestion} ><RiQuestionnaireLine className='btn-box-icon' /> Ask</button>
                <hr />
                <Link to="answer" target='_blank' className='ans-btn'><FiEdit className='btn-box-icon' /> Answer</Link>
                <hr />
                <button className='post-btn' onClick={handleCreatePost} ><GoPencil className='btn-box-icon' /> Post</button>
            </div>
        </section>
    )
}

export default QuestionBox
