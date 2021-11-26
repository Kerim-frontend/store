import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
import home from './../../assets/img/Home.png'
import cart from './../../assets/img/cart.svg'
const Nambar = () => {
    return (
        <div className="navbar">
            <ul className="nav-list">
                <li className="nav-item" ><NavLink exact className="nav-link"  activeClassName="nav-link__active"  to="/" ><img src={home} alt="home"/></NavLink></li>
                <li className="nav-item" ><NavLink className="nav-link" activeClassName="nav-link__active"  to="/cart" ><img src={cart} alt="cart"/></NavLink></li>
            </ul>
        </div>
    )
}
export default Nambar
