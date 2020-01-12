import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component{
    render(){
        return(
            <div className = "nav-bar">
                <div className = "nav-bar-items">
                    <ul className = "nav-bar-list">
                        <li><NavLink to = "/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar