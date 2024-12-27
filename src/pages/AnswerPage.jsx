import React from 'react'
import '../styles/answerPage.css'

import { PiStarFill } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { PiArrowFatDown } from "react-icons/pi";
import { RiWifiFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineEditOff } from "react-icons/md";
import { GiMailbox } from "react-icons/gi";

function AnswerPage() {
    return (
        <main className='main-container'>
            {/* --------------- Left section--------------- */}
            <section className="left-sec">
                <div>
                    <p>Questions</p>
                    <ul>
                        <li><button >Question for you</button></li>
                        <li><button >Answer request</button></li>
                        <li><button >Drafts</button></li>
                    </ul>
                </div>
            </section>
            {/* --------------- Middle section--------------- */}
            <section className="middle-sec">
                <div className='q-card'>
                    <p><span><PiStarFill /></span><span>Question for you</span></p>
                    {/*--------- Component -------- */}
                    <div className='q-box'>
                        <p>Why can we be viewed as multiverse? Why is it safer to do so?</p>
                        <p><span>45 answers</span><span>&middot;</span><span>Last followed</span><span>Dec 18</span></p>
                        <div>
                            <div>
                                <button><span><FaRegEdit /></span><span>Answer</span></button>
                                <button><span><RiWifiFill /></span><span>Follow</span><span>&middot;</span><span>1</span></button>
                                <button><span><MdOutlineEditOff /></span><span>Pass</span></button>
                            </div>
                            <div>
                                <button><span><PiArrowFatDown /></span></button>
                                <button><span><BsThreeDots /></span></button>
                            </div>
                        </div>
                    </div>
                    <div className='more-btn-box'>
                        <button className='more-btn'>More</button>
                    </div>
                    {/* ---- Add topis -box--- */}
                    <div className='topics-box'>
                        <div>
                            <h4>Add 5 topics you know about</h4>
                            <p>You’ll get better questions if you add more specific topics.</p>
                            <button>Add topics</button>
                        </div>
                        <div><img src="../../public/topic-cover.webp" alt="image" /></div>
                    </div>
                </div>
            </section>
            {/* -------- Right section ----------- */}
            <section className="right-sec">
                <div>
                    <p>Topics you know about</p>
                    <button><GoPencil /></button>
                </div>
                <div>
                    <div><GiMailbox /></div>
                    <h4>No topics yet</h4>
                    <p>You’ll get better questions if you add more specific topics.</p>
                    <button>Add topics</button>
                </div>
            </section>

        </main>
    )
}

export default AnswerPage
