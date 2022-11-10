import React from 'react'
import "./QuadOs.css"
import QuadOsImg from "../../../assets/8DE8007A4C79476B.png"
import Navbar from '../../Navbar/NavbarAndFooter/Navbar/Navbar'
import Footer from '../../Navbar/NavbarAndFooter/Footer/Footer'

const QuadOs = () => {
  return (
    <>
    <Navbar/>
    <div className="quad-os_parentDiv">
        <div className="quad-os_childDiv">
        <div className="quad-os_img">
                <img src={QuadOsImg} alt="" />
            </div>
            
            <div className="quad-os_titleDiv">
                <h2 className='quad-os_title'> Quad <span className='text-warning'>OS</span> is a new generation blockchain operating system</h2>
                <ul className='quad-os_description'>
                    <li>Maximum security and anonymity</li>
                    <li>Multi-blockchain supporting</li>
                    <li>Decentralized oracle and free for all</li>
                    <li>Decentralized VPN and high speed</li>
                </ul>
            </div>

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default QuadOs