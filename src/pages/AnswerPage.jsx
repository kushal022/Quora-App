import React from 'react'
import '../styles/answerPage.css'

import { GoPencil } from "react-icons/go";
import { GiMailbox } from "react-icons/gi";
import QusCompo from '../components/QusCompo';

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
                    <QusCompo />
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
