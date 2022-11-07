import React from 'react'
import PayImg from "../../../assets/pngegg.png"
import Navbar from '../../Navbar/NavbarAndFooter/Navbar/Navbar'
import "./QuadPay.css"

const QuadPay = () => {
  return (
    <>
    <Navbar/>
<div className="quad-pay_parentDiv">
        <div className="quad-pay_childDiv row g-0">
            <div className="quad-pay_img col-lg-6 col-12">
                <img src={PayImg} alt="" />
            </div>
            <div className="quad-pay_titleDiv col-lg-6 col-12">
                <h2 className='quad-pay_title'> Quad<span className='text-warning'>PAY</span></h2>
                <h3 className='quad-pay_subtitle'>QuadPay acts as a bridge between <span className='text-warning'>DeFi and fiat payment systems</span></h3>
                <ul className='quad-pay_description'>
                    <li>Universal payment system</li>
                    <li>Supporting Web 3.0 servises</li>
                    <li>Security and anonymity</li>
                    <li>Multichain transaction</li>
                </ul>
            </div>

        </div>
    </div>
    </>
  )
}

export default QuadPay