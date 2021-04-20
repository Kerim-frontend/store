import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import home from './../../assets/img/Home.png'
import cart from './../../assets/img/cart.svg'
import login from './../../assets/img/Logout.svg'
const Nambar = () => {
    return (
        <div className="navbar">
            <ul className="nav-list">
                <li className="nav-item" ><NavLink className="nav-link"   to="/" ><img src={home} alt=""/></NavLink></li>
                <li className="nav-item" ><NavLink className="nav-link"  to="/cart" ><img src={cart} alt=""/></NavLink></li>
                <li className="nav-item" ><NavLink className="nav-link"  to="/login" ><img src={login} alt=""/></NavLink></li>
        
            </ul>
        </div>
    )
}
export default Nambar
