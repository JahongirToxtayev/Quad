import React from 'react'
import {FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import LogoImg from "../../../../assets/Group 1.png"
import "./Navbar.css"

const Navbar = ({locale,handleChange}) => {

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
      <Link to={"/"} className="nav-text" ><FormattedMessage
                id='navbarHome'
                value={{locale}}>
                </FormattedMessage></Link>
      <a href="/#about" className="nav-text" ><FormattedMessage
                id='navbarCompany'
                value={{locale}}>
                </FormattedMessage></a>
      <Link to={"/Staking"} className="nav-text" >Staking</Link>
      <Link to={"/Roadmap"} className="nav-text" ><FormattedMessage
                id='navbarRoadMap'
                value={{locale}}>
                </FormattedMessage></Link>
      <Link to={`/Products/${locale}`} className="nav-text" ><FormattedMessage
                id='navbarProducts'
                value={{locale}}>
                </FormattedMessage></Link>
            </div>
            </nav>
        </div>
        <div className="right-component">
            <div className="nav-btns me-4">
                <select onChange={handleChange} defaultValue={locale}>
                    {["en","uz"].map((v,i)=>(
                        <option key={i}>{v}</option>
                    ))}
                </select>
                <button className='btn btn-outline-warning mx-2' disabled><FormattedMessage
                id='logIn'
                value={{locale}}>
                </FormattedMessage></button>
                <button className='btn btn-warning mx-2' disabled><FormattedMessage
                id='register'
                value={{locale}}>
                </FormattedMessage></button>

            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar