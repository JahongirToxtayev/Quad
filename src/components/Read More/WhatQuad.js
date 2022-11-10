import React from 'react'
import Footer from '../Navbar/NavbarAndFooter/Footer/Footer'
import Navbar from '../Navbar/NavbarAndFooter/Navbar/Navbar'
import "./style.css"

export const WhatQuad = () => {
  return (
    <>
    <Navbar/>
    
    <div className="read-more_quadParentDiv">
    <h1 className='what-quadTitle'>
            What is Quadrium (<span className='text-warning'>QUAD</span>) ?
        </h1>
        <div className='d-flex justify-content-center align-items-center'>
        <div className="read-more_quadChildDiv">
        <p className='what-quad_text'>
        Quadrium company is a blockchain company based on a team of revolutionary crypto shareholders
working in all areas of blockchain technology.
What is Quadrium(QUAD)?
Quadrium (QUAD) is a utility token of the Quadrium company, and this token is one of the main
elements of the company's ecosystem. This token is a digital share by nature, by purchasing it you
become a part of the company and one of its owners. <br />
<ul>
    <li className='what-quad_text'>Token name: Quadrium</li>
<li className='what-quad_text'>Token sign: QUAD</li>
<li className='what-quad_text'>Decimals: 9</li>
<li className='what-quad_text'>Program language: Solidity</li>
</ul>
What is the total amount of QUAD?
The total supply of QUAD, the native token of the Quadrium ecosystem, is 10,000,000,000,000.
        </p>
        </div>
        </div>
        </div>  
        <Footer/>  
    </>
  )
}
