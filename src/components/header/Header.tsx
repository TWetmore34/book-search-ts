import React from 'react'
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header>
        <ul className='header__container'>
            <li>
                <Link to="/">
                    <h1 className='link--text'>Home</h1>
                </Link>
            </li>
            <li>
                <Link to="/wishlist">
                    <p className='link--text'>Wishlist</p>
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header