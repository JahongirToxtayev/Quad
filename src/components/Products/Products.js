import {React,useEffect} from 'react'
import "./products.css"
import {IoMdWallet} from "react-icons/io"
import {RiGalleryFill,RiSecurePaymentFill} from "react-icons/ri"
import {GiTwoCoins} from "react-icons/gi"
import {FaChartLine} from "react-icons/fa"
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/NavbarAndFooter/Navbar/Navbar'
import AOS from 'aos';
import "aos";
import "aos/dist/aos.css";
import Footer from '../Navbar/NavbarAndFooter/Footer/Footer'



const Products = () => {

  useEffect(() => {
    AOS.init({
        duration:2000
    });
}, [])

  return (
    <div>
      <Navbar/>
      <div className="container-div">
        <h1 className='products-title'>Products</h1>
        <div className="products-parent_div">
        <div className="products-div1 products-div" data-aos={"fade-up"}>
      <div className="products-card_div">
      <IoMdWallet className='products-icon'></IoMdWallet>
      <h3 className='products-subtitle'><span className='text-warning'>Quad</span> Wallet</h3>
    <Link to={"/Products/QuadWallet"}>
    <button className='products-btn'>Enter</button>
    </Link>
      </div>
      
        </div>
        <div className="products-div2 products-div nft-hover" data-aos={"fade-down"}>
        <div className="products-card_div">
      <RiGalleryFill className='products-icon'></RiGalleryFill>
      <h3 className='products-subtitle fs-1'><span className='text-warning nft-word'>NFT</span> Marketplace</h3>
      <Link to={"/Products/NFT"}>
    <button className='products-btn'>Enter</button>
    </Link>
      </div>
        </div>
        <div className="products-div3 products-div" data-aos={"fade-up"}>
        <div className="products-card_div">
      <RiSecurePaymentFill className='products-icon'></RiSecurePaymentFill>
      <h3 className='products-subtitle'><span className='text-warning'>Quad</span> OS</h3>
      <Link to={"/Products/QuadOs"}>
    <button className='products-btn'>Enter</button>
    </Link>
      </div>
        </div>
        <div className="products-div4 products-div" data-aos={"fade-down"}>
        <div className="products-card_div">
      <FaChartLine className='products-icon'></FaChartLine>
      <h3 className='products-subtitle'><span className='text-warning'>Quad</span> Ex</h3>
      <Link to={"/Products/QuadEx"}>
    <button className='products-btn'>Enter</button>
    </Link>
      </div>
        </div>
        <div className="products-div5 products-div" data-aos={"fade-down"}>
        <div className="products-card_div">
      <GiTwoCoins className='products-icon'></GiTwoCoins>
      <h3 className='products-subtitle'><span className='text-warning'>Quad</span> Pay</h3>
      <Link to={"/Products/QuadPay"}>
    <button className='products-btn'>Enter</button>
    </Link>
      </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Products