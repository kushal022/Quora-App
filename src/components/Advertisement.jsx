import React from 'react'
import '../styles/advertisement.css'
import { RxCross2 } from "react-icons/rx";
import { GoInfo } from "react-icons/go";
function Advertisement() {
  return (
    <main className='ad-container'>
      <div className="adds-box">
        <button className='close-btn'><RxCross2 /></button>
        <button className='info-btn'><GoInfo /></button>
        <img src="../../public/spaces-img/spaceimg3.jpg" alt="" />
      </div>
      <div className="adds-box">
        <button className='close-btn'><RxCross2 /></button>
        <button className='info-btn'><GoInfo /></button>
        <img src="../../public/spaces-img/spaceimg5.jpg" alt="" />
      </div>
      <div className="ad-footer">
        <p>Advertisement</p>
      </div>
    </main>
  )
}

export default Advertisement


{/* const AdCards = () => {
  return (
    <>
      <div className="adds-box">
        <button className='close-btn'><RxCross2 /></button>
        <button className='info-btn'><GoInfo /></button>
        <img src="../../public/spaces-img/spaceimg5.jpg" alt="" />
      </div>
      <div className="ad-footer">
        <p>Advertisement</p>
      </div>
    </>
  )
}
 */}
