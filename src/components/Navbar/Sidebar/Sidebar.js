import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoImg from "../../../assets/Group 1.png";
import {useSidebarContext} from "../../../context/sidebar_context";
import { FaTimes } from 'react-icons/fa'


const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useSidebarContext()
    return <SidebarContainer>
        <aside className={`${isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}`}>
            <div className="sidebar-header">
                <div className="navbar-title_div">
                    <Link to={"/"} className="nav-link active" aria-current="page">
                        <img src={LogoImg} alt="" />
                    </Link>
                    <h3 className='navbar-title'>Quad</h3>
                </div>
                <button className="close-btn" type="button" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>

            <div className="sidebar-links">
                <Link to={"/"} className="nav-text" >Home</Link>
                <Link to={"/"} className="nav-text" >Company</Link>
                <Link to={"/Staking"} className="nav-text" >Staking</Link>
                <Link to={"/Roadmap"} className="nav-text" >Roadmap</Link>
                <Link to={"/Products"} className="nav-text" >Products</Link>
            </div>


            <div className="sidebar-btns">
                <button className='btn btn-outline-warning mx-2' style={{color: "orange"}} disabled>Log In</button>
                <button className='btn btn-warning mx-2' disabled>Register</button>
            </div>
        </aside>
    </SidebarContainer>
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem 1.5rem;
  }
  .navbar-title{
    padding-left: 1rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: #FAD31E;
  }
  
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
  .sidebar-links{
    //display: flex;
    //flex-direction: column;
    //justify-content: space-around;
    //align-items: center;
    margin-bottom: 2rem;
  }
  .sidebar-links a{
    display: block;
    text-align: left;
    text-decoration: none;
    color: #000000;
    font-size: 20px;
    font-weight: 400;
    padding: 1rem 1.5rem;
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .sidebar-links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: hsl(210, 36%, 96%);
    color: hsl(211, 39%, 23%);
  }
`

export default Sidebar