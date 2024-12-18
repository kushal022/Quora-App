import React, { useState } from 'react';
import '../styles/spaces.css'
import { Link } from 'react-router-dom';

function Space() {
    const [spaces, setSpaces] = useState([
        { id: 1, name: 'Space 1', description: 'This is Space 1', iconImg: '../../public/spaces-img/spaceimg1.jpg' },
        { id: 2, name: 'Space 2', description: 'This is Space 2', iconImg: '../../public/spaces-img/spaceimg2.jpg' },
        { id: 3, name: 'Space 3', description: 'This is Space 3', iconImg: '../../public/spaces-img/spaceimg3.jpg' },
        { id: 4, name: 'Space 4', description: 'This is Space 4', iconImg: '../../public/spaces-img/spaceimg4.jpg' },
        { id: 5, name: 'Space 5', description: 'This is Space 5', iconImg: '../../public/spaces-img/spaceimg5.jpg' },
        { id: 6, name: 'Space 6', description: 'This is Space 6', iconImg: '../../public/spaces-img/spaceimg6.jpg' },
        { id: 7, name: 'Space 7', description: 'This is Space 7', iconImg: '../../public/spaces-img/spaceimg7.jpg' },
        { id: 8, name: 'Space 8', description: 'This is Space 8', iconImg: '../../public/spaces-img/spaceimg8.jpg' },
        // Add more spaces here...
    ]);
    const [query, setQuery] = useState([
        'About', 'Careers', 'Terms', 'Privacy',
        'Acceptable use', 'Advertise', 'Press',
        'Your Ad Choices', 'Grievance Officer',
    ])


    return (
        <section className='left-compo-spaces'>
            <div className='spaces-container'>
                <button className='createSpaceBtn'><span>+</span> Create Spaces</button>
                <ul style={{ listStyle: 'none' }} >
                    {spaces.map(space => {
                        return (
                            <li key={space.id}>
                                <img src={space.iconImg} className='spaceImg' alt="SpaceImage" width={'50px'} />
                                <span>{space.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='query-container'>
                {query.map((query, index) => {
                    return (
                        <div className='query-link-box'>
                            <Link className='query-link' key={index} >{query}</Link>
                            <span>&middot;</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Space
