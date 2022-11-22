import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import LogoImg from "../../../../assets/Group 1.png"
import "./Navbar.css"
import {FaBars} from "react-icons/fa";
import {useSidebarContext} from "../../../../context/sidebar_context";

const Navbar = () => {
    const {openSidebar} = useSidebarContext()
    return (
    <>
    <div className="navbar-parent_div">
        <div className="left-component">
            <nav className="nav">
                <div className="navbar-title_div">
                    <Link to={"/"} className="nav-link active" aria-current="page">
                        <img src={LogoImg} alt="" />
                    </Link>
                    <h3 className='navbar-title'>Quad</h3>
                </div>
                <div className="navbar-middle_textDiv ms-5">
                      <Link to={"/"} className="nav-text" >Home</Link>
                      <Link to={"/"} className="nav-text" >Company</Link>
                      <Link to={"/Staking"} className="nav-text" >Staking</Link>
                      <Link to={"/Roadmap"} className="nav-text" >Roadmap</Link>
                      <Link to={"/Products"} className="nav-text" >Products</Link>
                </div>
            </nav>
        </div>
        <div className="right-component">
            <div className="nav-btns me-4">
                <button className='btn btn-outline-warning mx-2' disabled>Log In</button>
                <button className='btn btn-warning mx-2' disabled>Register</button>

            </div>
            <button type="button" className="nav-toggle" onClick={openSidebar}>
                <FaBars />
            </button>
        </div>
        </div>
    </>
  )
}

export default Navbar