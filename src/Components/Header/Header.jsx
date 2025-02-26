import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const [text, setText] = useState("")
    const navigate = useNavigate()

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleKeyDown = (e) => {
        if(e.keyCode == 13) {
            navigate(`search/${text}`)
        }
    }

    return (
        <header>
            <div className="header">
                <img src="https://www.themealdb.com/images/logo-small.png" alt="Logo" />


                <div className={`nav-links ${menuActive ? 'active' : ''}`}>
                    <Link to="/" className="active">Home</Link>
                    <Link to="/about">About</Link>
                </div>

                <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Search" className="search-input" onKeyDown={handleKeyDown} />
                <div className="burger-menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Header;

