import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/logos/logo.png';
import humbergerIcon from '../../Assets/icons/humberger-icon.png';
import PrimeryButton from '../../ControlledComponents/PrimeryButton/PrimeryButton';

const Navbar = () => {
    const [isActive, setIsActive] = useState(0);
    const [navOpen, setNavOpen] = useState(false);
    const handleNavActive = (index) => { setIsActive(index); };
    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about-us' },
        { name: 'Portfolio', link: '/our-projects' },
        { name: 'Services', link: '/services' },
        // { name: 'Vemeo', link: '/vemeo-videos' },
    ];
    
    const location = useLocation();
    const navigate = useNavigate();
    
    const navigateToContact = () => {
        setIsActive(-1);
        navigate(`/contact-us`);
    };
    
    useEffect(() => {
        const currentIndex = navLinks.findIndex(item => item.link === location.pathname);
        setIsActive(currentIndex !== -1 ? currentIndex : 0); // Default to first item if not found
    }, [location.pathname, navLinks]);

    const handleNavOpen = () => {
        setNavOpen(!navOpen);
    };

    const handleNavClose = () => {
        setNavOpen(false);
    };


    const [isMobileNavOpen,setMobileNavOpen]=useState(false);

    return (
        <div className='navbar-main-container'>
            <div className='navbar-inner-container'>
                <div className='navbar-logo-section'>
                    <Link to='/'>
                        <img src={logo} alt='logo' />
                    </Link>
                </div>
                <div className='navbar-links-section'>
                    {navLinks.map((items, index) => (
                        <Link
                            key={index}
                            to={items.link}
                            className={`navbar-link-anchor ${isActive === index ? 'navbar-link-active-anchor' : ''}`}
                            onClick={() => handleNavActive(index)}
                        >
                            {items.name}
                        </Link>
                    ))}
                </div>
                <div className='navbar-contact-btn-section'>
                    <PrimeryButton
                        text={'Contact Us'}
                        width={'173px'}
                        height={'50px'}
                        fontSize={'18px'}
                        lineHeight={'22px'}
                        fontWeight={'400'}
                        color={'#fff'}
                        navigateClick={navigateToContact}
                    />
                </div>
            </div>
            <div className={`mobile-navbar-inner-container ${navOpen ? "open" : ""}`}>
    <div className="headerSection_mobile_view">
        <img src={logo} alt='main logo' className='mobile-main-logo' />
        <img src={humbergerIcon} alt='nav-toggle' className='mobile-humberger-icon' onClick={handleNavOpen} />
    </div>
    {navOpen ? (
        <div className='navbar-links-section'>
            {navLinks.map((items, index) => (
                <Link
                    key={index}
                    to={items.link}
                    className={`navbar-link-anchor ${isActive === index ? 'navbar-link-active-anchor' : ''}`}
                    onClick={() => {
                        handleNavActive(index);
                        setNavOpen(false); // Close the mobile menu
                    }}
                >
                    {items.name}
                </Link>
            ))}
            <div className='navbar-contact-btn-section'>
                <PrimeryButton
                    text={'Contact Us'}
                    width={'173px'}
                    height={'50px'}
                    fontSize={'18px'}
                    lineHeight={'22px'}
                    fontWeight={'400'}
                    color={'#fff'}
                    navigateClick={() => {
                        navigateToContact();
                        setNavOpen(false); // Close the mobile menu
                    }}
                />
            </div>
        </div>
    ) : null}
</div>

        </div>
    );
};

export default Navbar;
