import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer>
                <div className='footer'>
                    <div>
                        <p>© 2025 TheMealDB</p>
                        <p>Proudly built in the UK <img src="https://www.themealdb.com/images/icons/flags/big/16/gb.png" alt="" /></p>
                    </div>
                    <div className='block2'>
                        <p className='text'>Socials: </p>
                        <img src="https://www.themealdb.com/images/facebook_icon.png" alt="" />
                        <img src="https://www.themealdb.com/images/twitter_icon.png" alt="" />
                        <img src="https://www.themealdb.com/images/discord_icon.png" alt="" />
                    </div>
                    <div className='Link'>
                        <Link to="/about">About</Link>
                        <Link to="/fag">Fag</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
                <div className='imgs'>

                    <img src="https://www.themealdb.com/images/logo-tcdb.png" alt="" />
                    <img src="https://www.themealdb.com/images/logo-tadb.png" alt="" />
                    <img src="https://www.themealdb.com/images/logo-tsdb.png" alt="" />
                </div>
            </footer>
        </div>
    )
}

export default Footer
