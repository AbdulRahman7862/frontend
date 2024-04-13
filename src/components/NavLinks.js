import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const NavLinks = () => {
    const [selectedItem, setSelectedItem] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function clickHandler(item) {
        setSelectedItem(item);
    }

    const toggleNavBar = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const selectedStyle = {
        background: 'linear-gradient(89deg, #0048FF 12.75%, #FF6D43 74.83%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <div className='space-x-4 mt-[20px] font-medium'>
            <div
                className={`flex ${isMenuOpen ? 'flex-col' : 'hidden'} md:flex md:flex-row space-x-4`}
            >
                <Link
                    to='/home'
                    onClick={() => clickHandler('Home')}
                    style={selectedItem === 'Home' ? selectedStyle : {}}
                >
                    Home
                </Link>
                <Link
                    to='/Services'
                    onClick={() => clickHandler('Services')}
                    style={selectedItem === 'Services' ? selectedStyle : {}}
                >
                    Services
                </Link>
                <Link
                    to='/OurTeam'
                    onClick={() => clickHandler('Our Team')}
                    style={selectedItem === 'Our Team' ? selectedStyle : {}}
                >
                    Our Team
                </Link>
                <Link
                    to='/ContactUs'
                    onClick={() => clickHandler('Contact Us')}
                    style={selectedItem === 'Contact Us' ? selectedStyle : {}}
                >
                    Contact Us
                </Link>
                <Link
                    to='/Testimonials'
                    onClick={() => clickHandler('Testimonials')}
                    style={selectedItem === 'Testimonials' ? selectedStyle : {}}
                >
                    Testimonials
                </Link>
                <button className='h-[2rem] px-[2rem] py-[0.1rem] gap-[10px] rounded-xl bg-gradient-to-r from-[#0048FF] via-[#0048FF] to-[#FF6D43] text-white font-bold not-italic'>
                    Hire Us
                </button>
            </div>

            {/* Responsive hamburger */}
            <button className='md:hidden' onClick={toggleNavBar}>
                <Hamburger toggled={isMenuOpen} />
            </button>
        </div>
    );
};

export default NavLinks;
