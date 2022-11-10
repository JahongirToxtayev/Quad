import React from 'react'
import Navbar from '../Navbar/NavbarAndFooter/Navbar/Navbar'
import "./style.css"

export const WhatOurGoal = () => {
  return (
    <div>
        <Navbar/>
    
    <div className="read-more_quadParentDiv what-our-goal_parentDiv">
    <h1 className='what-quadTitle'>
            What is our (<span className='text-warning'>goal</span>) ?
        </h1>
        <div className='d-flex justify-content-center align-items-center'>
        <div className="read-more_quadChildDiv">
        <p className='what-quad_text'>
        <ul>
            <li className='what-quad_text'>Given that QUAD is the main financial element of the Quadrium ecosystem,
it is not impossible for this digital asset to reach a value of $1. Several
important factors should be taken into account</li>
            <li className='what-quad_text'>The total emission of QUAD is 10,000,000,000,000 units. To increase the
price of QUAD, the team will eliminate 50% of the total issue after the presale</li>
            <li className='what-quad_text'>The development of the Quadrium ecosystem and the increase in demand
for QUAD will lead to an increase in the capitalization of this asset, and at
the same time, an increase in the price of the asset</li>
            <li className='what-quad_text'>The increase in the price of QUAD will be significantly affected by the
implementation of the work on the road map set by the company</li>
            <li className='what-quad_text'>Permanent burning actions are held by the team and the community</li>

        </ul>
        </p>
        </div>
        </div>
        </div>    
    </div>
  )
}
