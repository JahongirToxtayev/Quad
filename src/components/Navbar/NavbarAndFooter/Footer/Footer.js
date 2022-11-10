import React from 'react'
import "./Footer.css"
import {SiGmail} from "react-icons/si"
import {Link} from "react-router-dom"
import QuadImg from "../../../../assets/Slice_1-removebg-preview.png"
import {RiInstagramFill} from "react-icons/ri"
import {FaTelegramPlane} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"



const Footer = () => {
  return (
    <>
    <div className="footer-parent_div">
                  <div className="footer-child_div row">
                    <div className="col-lg-3 footer-quad_img">
                      <img src={QuadImg} alt="" />
                      <h3>Quadrium Company</h3>
                    </div>
                    <div className="col-lg-3">
                      <ul className='footer-about_ul'>
                        <a  className='a' href="#about">
                        <li > <span className='footer-about'>About</span> </li>
                        </a>
                          <a className='a' href="#about">
                        <li>Company</li>
                          </a>
                        <li>Whitepaper</li>
                        <Link className='a' to="/what-quad">
                        <li>What is Quad?</li>
                        </Link>
                        <Link className='a' to="/what-our-goal">
                        <li>What is our goal?</li>
                        </Link>
                      </ul>
                    </div>

                    <div className="col-lg-3">
                      <ul className='footer-about_ul'>
                        <Link className='a' to="/Staking">
                        <li > <span className='footer-about'>Staking</span> </li>
                        </Link>
                        <Link className='a' to="/Roadmap">
                        <li > <span className='footer-about'>Roadmap</span> </li>
                        </Link>
                      </ul>
                    </div>

                    <div className="col-lg-3">
                      <ul className='footer-about_ul'>
                      <Link className='a' to="/Products">
                        <li > <span className='footer-about'>Products</span> </li>
                        </Link>
                        <Link className='a' to="/Products/QuadWallet">
                        <li>Quad Wallet</li>
                        </Link>
                        <Link className='a' to="/Products/QuadEx">
                        <li>Quad Ex</li>
                        </Link>
                        <Link className='a' to="/Products/NFT">
                        <li>NFT Marketplace</li>
                        </Link>
                        <Link className='a' to="/Products/QuadOs">
                        <li>Quad Os</li>
                        </Link>
                        <Link className='a' to="/Products/QuadPay">
                        <li>Quad Pay</li>
                        </Link>

                      </ul>
                    </div>
                  </div>

                  <div className="social-links_parentDiv">
                    <div className="social-links">
                      <a className='a' href="https://instagram.com/quadrium_company?igshid=NDc0ODY0MjQ=">
                          <RiInstagramFill className='social-icon'/>
                      </a>
                      <a className='a' href="https://t.me/QuadriumCompany">
                          <FaTelegramPlane className='social-icon'/>
                      </a>
                      <a className='a' href="">
                          <BsTwitter className='social-icon'/>
                      </a>
                      <a className='a' href="">
                          <SiGmail className='social-icon'/>
                      </a>
                    </div>
                  </div>
                  <h4>All Rights Reserved<sup style={{fontSize:"20px"}}>&reg;</sup></h4>
                </div>
    </>
  )
}

export default Footer