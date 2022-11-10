import React from 'react'
import "./QuadEx.css"
import QuadExImg from "../../../assets/QuadEX.png"
import Navbar from '../../Navbar/NavbarAndFooter/Navbar/Navbar'
import {BsFillArrowDownSquareFill} from "react-icons/bs"
import Footer from '../../Navbar/NavbarAndFooter/Footer/Footer'

const QuadEx = () => {
  return (
    <>
    <Navbar/>
    <div className="quad-ex_parentDiv">
        <div className="quad-ex_childDiv">
            
            <div className="quad-ex_titleDiv">
                <h2 className='quad-ex_title'> QuadEX is a new generation hybrid exchange</h2>
                <ul className='quad-ex_description'>
                    <li>The first hybrid crypto exchange</li>
                    <li>Trading of tokenized shares</li>
                    <li>Trading all types of cryptocurrencies</li>
                    <li>High security system Lowest fee - 0.001%</li>
                </ul>
            </div>
            <div className="quad-ex_img">
                <img src={QuadExImg} alt="" />
            </div>

        </div>
    </div>

<div className="quad-ex_parentDiv2">
    <div className="quad-ex-titleDiv">
        <h1>How does Quad<span className='text-warning'>EX</span> work?</h1>
    </div>
    <div className="quad-ex-parent_textDiv">
        <div className="quad-ex_textDiv">
            <BsFillArrowDownSquareFill className='ex-icon'/>
            <h4>Quad<span className='text-danger'>EX</span>  is a great combination of stock and crypto, combining the traditional stock market and the crypto market</h4>
        </div>
        <div className="quad-ex_textDiv">
        <BsFillArrowDownSquareFill className='ex-icon'/>
            <h4>Quad<span className='text-danger'>EX</span>  supports small businesses and helps them raise capital</h4>
        </div>
        <div className="quad-ex_textDiv">
        <BsFillArrowDownSquareFill className='ex-icon'/>
            <h4>Quad<span className='text-danger'>EX</span>  will become a major platform for trading tokenized shares on a blockchain basis</h4>
        </div>
        <div className="quad-ex_textDiv">
        <BsFillArrowDownSquareFill className='ex-icon'/>
            <h4>Quad<span className='text-danger'>EX</span>  supports more than 10 major blockchains</h4>
        </div>
        <div className="quad-ex_textDiv">
        <BsFillArrowDownSquareFill className='ex-icon'/>
            <h4>Quad<span className='text-danger'>EX</span>  aims to partner with Binance, Kucoin, Huobi Global and many other exchanges and channel stock market capital into the crypto market</h4>
        </div>
    </div>
</div>
    <Footer/>
    </>
  )
}

export default QuadEx