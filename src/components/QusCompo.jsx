import React from 'react'
import '../styles/answerPage.css'

import { PiStarFill } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { PiArrowFatDown } from "react-icons/pi";
import { RiWifiFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineEditOff } from "react-icons/md";

const QusCompo = () => {
    return (
        <div className='q-compo'>
            <p><span><PiStarFill /></span><span>Question for you</span></p>
            <QusBoxCompo />
            <QusBoxCompo />
            <QusBoxCompo />
        </div>
    )
}

const QusBoxCompo = () => {
    return (
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
    )
}



export default QusCompo;
export { QusBoxCompo } 
