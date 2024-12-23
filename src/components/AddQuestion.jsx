import React, { useState } from 'react'
import '../styles/addQuestionCompo.css'
import { IoMdPlay } from "react-icons/io";
import { FcButtingIn } from "react-icons/fc";
import { FaChevronDown, FaAngleRight } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { CiImageOn } from "react-icons/ci";

function AddQuestion(props) {
    const [clickedAdd, setClickedAdd] = useState(true);
    const [clickedCreate, setClickedCreate] = useState(false);


    const handlerAddQuestion = () => {
        props.setInitialCard('addQusCard');
        setClickedAdd(true);
        setClickedCreate(!clickedCreate);

    }
    const handlerCreatePost = () => {
        props.setInitialCard('createPost');
        setClickedCreate(true);
        setClickedAdd(!clickedAdd);

    }
    //-------- Close Card handler------------
    const handlerCloseCard = (e) => {
        e.preventDefault();
        props.setIsOpenAddQusCard(!props.isOpenAddQusCard);
        props.setInitialCard('addQusCard')
        setClickedAdd(true);
        setClickedCreate(false);
    }

    //-------- Submit handler------------
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <main
            className='main-add-question-container'
        >
            <div className='add-qus-close-btn-box'><button onClick={handlerCloseCard} >X</button></div>
            <div className="add-create-box">
                <button
                    className='add-Qus-btn'
                    onClick={handlerAddQuestion}
                    style={clickedAdd ? {
                        borderBottomColor: 'var(--clr-bdr-1)', backgroundColor: 'transparent'
                    } : null}
                    disabled={clickedAdd ? true : false}
                >Add Question</button>
                <button
                    className='create-btn'
                    onClick={handlerCreatePost}
                    style={clickedCreate ? {
                        borderBottomColor: 'var(--clr-bdr-1)', backgroundColor: 'transparent'
                    } : null}
                    disabled={clickedCreate ? true : false}

                >Create Post</button>
            </div>

            {props.initialCard === 'addQusCard' ?
                //  ------------ Add Question --------------
                <form className='add-qus-form'
                    onSubmit={handleSubmit}
                >
                    <div className="tip-box">
                        <p>Tips on getting good answers quickly</p>
                        <ul>
                            <li>Make sure your question has not been asked already</li>
                            <li>Keep your question short and to the point</li>
                            <li>Double-check grammar and spelling</li>
                        </ul>
                    </div>
                    <div className="audience-box">
                        <div><FcButtingIn /><IoMdPlay className='play-icon' /></div>
                        <div><button className='public-btn'><GoPeople />Public<FaChevronDown /></button></div>
                    </div>
                    <div className="qus-write-box">
                        <textarea
                            placeholder='Start your question with "What","How","Why",etc.'
                            name="" id="">
                        </textarea>
                        <div className="suggestion-box"></div>
                        <div className="cancel-add-btn-box">
                            <button>Cancel</button>
                            <button>Add question</button>
                        </div>
                    </div>
                </form>

                :
                //  ------------ Create Post--------------
                <form className='add-qus-form'
                    onSubmit={handleSubmit}
                >
                    <div className="user-box">
                        <div className='profile-img-create-post'><FcButtingIn /></div>
                        <p>UserName</p>
                        <div><button className='credential-btn'>Choose credential<FaAngleRight /></button></div>
                    </div>
                    <div className="qus-write-box">
                        <textarea
                            placeholder='Say something...'
                            name="" id="">
                        </textarea>
                        <div className="suggestion-box"></div>
                        <div className="letter-img-post-box">
                            <button className='letter-btn'>Aa</button>
                            <button className='img-btn'><CiImageOn /></button>
                            <button className='post-btn'>Post</button>
                        </div>
                    </div>
                </form>}
        </main>
    )
}

export default AddQuestion
