import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
                <a className="navbar-brand" href="#">useContext</a>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink  to="./" activeClassName="active" className="nav-link active" aria-current="page" >Home</NavLink>
                        <NavLink exact to="./about" activeClassName="active" className="nav-link" >About</NavLink>
                        <NavLink exact to="./login" activeClassName="active" className="nav-link" >Login</NavLink>
                    </div>
                </div>
        </nav>


    )
}
