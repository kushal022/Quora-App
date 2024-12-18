import React from 'react'
import '../styles/navBar.css'
import QuoraLogo from '../../public/quoraLogo2.png'
import { NavLink, Link } from 'react-router-dom'
// import react icons
import { MdHome } from "react-icons/md";
import { RiListView } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FcButtingIn } from "react-icons/fc";
import { IoGlobeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";


function NavBar() {
    // console.log(FaSearch)
    return (
        <nav className='nav-container'>
            <div className='q-logo-container'>
                <img className='q-logo' src={QuoraLogo} alt="quora-logo" />
            </div>
            <ul className='nav-list-left'>
                <li className='home'><NavLink className='nav-icon'><MdHome /></NavLink></li>
                <li className='following'><NavLink className='nav-icon'><RiListView /></NavLink></li>
                <li className='answer'><NavLink className='nav-icon'><FaRegEdit /></NavLink></li>
                <li className='spaces'><NavLink className='nav-icon'><FaPeopleGroup /></NavLink></li>
                <li className='notifications'><NavLink className='nav-icon'><IoNotifications /></NavLink></li>
            </ul>
            <div className='search-box nav-icon'>
                <IoIosSearch className='search-icon' />
                <input className='search-input-box'
                    type="text"
                    placeholder='Search Quora'
                />
            </div>
            <ul className='nav-list-right'>
                <li className='try-quora-box'>
                    <NavLink className='try-quora-link'>Try Quora+</NavLink>
                </li>
                <li className='profile-icon'><NavLink className='nav-icon'><FcButtingIn /></NavLink></li>
                <li className='lang-icon'><NavLink className='nav-icon'><IoGlobeOutline /></NavLink></li>
                <li className='add-arrow-btn-box'>
                    <button className='add-qus-btn'>Add question </button>
                    <button className='create-post-btn'><FaChevronDown /></button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
