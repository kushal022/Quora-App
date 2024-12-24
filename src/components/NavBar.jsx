import React, { useState } from 'react'
import '../styles/navBar.css'
import QuoraLogo from '../../public/quoraLogo2.png'
import { NavLink, Link } from 'react-router-dom'
import Space from './Space'
import spaceData from '../api/spaceData.json'  // Space data import

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
import { FaPencil } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import AddQuestion from './AddQuestion';


function NavBar() {
    const [isOpenAddQusCard, setIsOpenAddQusCard] = useState(false);
    const [initialCard, setInitialCard] = useState('addQusCard');
    const [disableChild, setDisableChild] = useState(false);
    const [toggleDownarrow, setToggleDownarrow] = useState(false);
    const [toggleDropDownSpace, setToggleDropDownSpace] = useState(false);


    // Handle Add Qus:
    const handleAddQus = (e) => {
        e.preventDefault();
        setIsOpenAddQusCard(!isOpenAddQusCard);
    }
    const handleCreatePost = (e) => {
        e.preventDefault();
        setIsOpenAddQusCard(!isOpenAddQusCard);
        setInitialCard('createPost');
        setToggleDownarrow(!toggleDownarrow);
    }

    //------------- Downarrow Toggle handler ---------
    const handlerDownarrow = (e) => {
        e.preventDefault();
        setToggleDownarrow(!toggleDownarrow);
        toggleDropDownSpace ? setToggleDropDownSpace(!toggleDropDownSpace) : null;
    }
    //------------- Space DropDown Toggle handler ---------
    const handlerDropdownSpace = (e) => {
        e.preventDefault();
        setToggleDropDownSpace(!toggleDropDownSpace);
        toggleDownarrow ? setToggleDownarrow(!toggleDownarrow) : null;
    }
    return (
        <nav className='nav-container'>
            <div className='q-logo-container'>
                <img className='q-logo' src={QuoraLogo} alt="quora-logo" />
            </div>
            <ul className='nav-list-left'>
                <li className='home'><NavLink to="home" className='nav-icon'><MdHome /></NavLink></li>
                <li className='following'><NavLink to="following" className='nav-icon'><RiListView /></NavLink></li>
                <li className='answer'><NavLink to="" className='nav-icon'><FaRegEdit /></NavLink></li>
                <li className='spaces'
                    onClick={handlerDropdownSpace}
                ><span className='nav-icon'><FaPeopleGroup /></span>
                    <div className="space-dropdown-box"
                        style={{ display: toggleDropDownSpace ? "block" : "none" }}
                    >
                        <Link className="see-all-spaces">See All Spaces <FaAngleRight /></Link>
                        <ul className="space-dropdown-list">
                            {spaceData.slice(0, 4).map(space => {
                                return (
                                    <li key={space.id}>
                                        <img src={space.imgUrl} className='spaceImg' alt="SpaceImage" width={'50px'} />
                                        <span>{space.name}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </li>
                <li className='notifications'><NavLink to="notification" className='nav-icon'><IoNotifications /></NavLink></li>
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
                    <NavLink to="" className='try-quora-link'>Try Quora+</NavLink>
                </li>
                <li className='profile-icon'><NavLink to="" className='nav-icon'><FcButtingIn /></NavLink></li>
                <li className='lang-icon'><NavLink to="" className='nav-icon'><IoGlobeOutline /></NavLink></li>
                <li className='add-arrow-btn-box'>
                    <button onClick={handleAddQus} className='add-qus-btn'>Add question </button>
                    <button className='create-post-btn'
                        onClick={handlerDownarrow}
                    ><FaChevronDown /></button>
                    <div
                        className="dropdown-btn-box"
                        style={{ display: !toggleDownarrow ? "none" : "block" }}
                    >
                        <button onClick={handleCreatePost} ><FaPencil />Create Post</button>
                    </div>
                </li>
            </ul>
            <div className="add-qus-card"
                // onClick={(e) => {
                //     !disableChild ? setIsOpenAddQusCard(!isOpenAddQusCard) : null;
                //     // setDisableChild(false);
                // }}
                style={{ display: isOpenAddQusCard ? "flex" : "none" }}>

                <AddQuestion
                    // closePage={(e) => {
                    //     // e.stopPropagation(); 
                    //     // setDisableChild(!disableChild);
                    //     console.log("helo");
                    //     setIsOpenAddQusCard(!isOpenAddQusCard);

                    // }}
                    isOpenAddQusCard={isOpenAddQusCard}
                    setIsOpenAddQusCard={setIsOpenAddQusCard}
                    initialCard={initialCard}
                    setInitialCard={setInitialCard}
                />
            </div>

        </nav >
    )
}

export default NavBar
