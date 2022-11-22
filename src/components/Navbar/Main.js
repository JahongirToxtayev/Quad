import {React,useEffect} from 'react'
import "../Navbar/Main.css"
import QuadImg from "../../assets/Slice_1-removebg-preview.png"
import StructureSection from "../StructureSection";
import Chart from "react-apexcharts";
import Navbar from './NavbarAndFooter/Navbar/Navbar';
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom"
import {RiAdvertisementFill,RiTeamFill,RiInstagramFill} from "react-icons/ri"
import {GrDiamond} from "react-icons/gr"
import {MdMovieFilter} from "react-icons/md"
import {FaCartArrowDown,FaTelegramPlane} from "react-icons/fa"
import {BsClipboardData,BsTwitter} from "react-icons/bs"
import {SiGmail} from "react-icons/si"
import AOS from 'aos';
import "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination,Autoplay} from "swiper";


let pieChartData={
    series:[50,30,5,5,5,5],
    labels:['5,000,000,000,000 (50%) QUAD will be burned by sending to a dead wallet after pre-sale.', '3,000,000,000,000 (30%) QUAD will be blocked to provide liquidity', 
    '500,000,000,000 (5%) will be allocated for marketing and promotion of QUAD', 
    '500,000,000,000 (5%) QUAD will be airdropped to the Quadrium crypto community', 
    '500,000,000,000 (5%) belong to the QUAD community',
    "500,000,000,000 (5%) QUAD will be blocked for later activation"]
}



const Main = () => {

  useEffect(() => {
    AOS.init({
        duration:1000
    });
}, [])

  return (
    <>
    <div >
        <Navbar/>
        <div className="quads-parent_div">

            <div className="quads-title_backDiv">
               <div className="quads-div_title">
               <h1 className='quads-title'>Welcome to <br /> <span className='letter-space'>Quadrium</span></h1> 
               <h3 className='quads-subtitle'>Blockchain Ecosystem</h3>
               <div className="quads-btns_div">
                <button className='first-btn'>BUY NOW</button>
                <button className='first-btn'>WHITEPAPER</button>
               </div>
            </div>
            </div>
        </div>
        </div>

        <div className="what-quad_div g-0 row">
           <div className="what-quad_img col-5" data-aos={"zoom-out-up"}>
            <img src={QuadImg} alt="" />
            </div>
            <div className="what-quad_textParent col-7" id='about'>
            <div className="what-quad_textDiv p-4" data-aos={"zoom-out-down"}>
                <h4 className='what-quad_subtitle'>Quadrium Blockchain Ecosystem</h4>
                <h3 className='what-quad_title'>What is Quadrium(<span className='text-warning'>QUAD</span>)?</h3>
                <p className='what-quad_text'>Quadrium (QUAD) is a utility token of the Quadrium company, and this token is one of the main elements of the company's ecosystem. This token is a digital share by nature, by purchasing it you become a part of the company and one of its owners.</p>
            </div>
            <div className="what-quad_btnDiv">
                <Link to="/what-quad">
                <button className='what-quad_btn'>Read More</button>
                </Link>
            </div>
            </div>
            
        </div>

    <div className="what-goal_parentDiv row g-0 p-5">
        <div className="what-goal_childDiv col-lg-6 col-12" data-aos={"zoom-out-right"}>
            <h4>What is our <span className='text-warning'>goal</span> ?</h4>
            <p>Quadrium (QUAD) is a utility token of the Quadrium company, and this token is one of the main elements of the company's ecosystem. This token is a digital share by nature, by purchasing it you become a part of the company and one of its owners.</p>
                <Link to={"/what-our-goal"}>
            <button className='what-quad_btn'>Read More</button>
                </Link>
        </div>
    </div>

    <StructureSection />

    <div className="pie-chart">
                <Chart 
                type="pie"
                height={580}
                series={ pieChartData.series}            
                
                options={{
                    chart: {
                        width:"100%",
                        background: '#191919',
                    },
                    stroke: {
                        lineCap: 'butt',
                        colors: undefined,
                    },
                    title: {
                        offsetY:15,
                        text: "Tokenomics",
                        align: 'center',
                        margin: 10,
                        floating: false,
                        style: {
                          fontSize:  '35px',
                          fontWeight:  400,
                          fontFamily:  "Poppins",
                          color:  '#FFD700'
                        },
                    }, 
                    dataLabels:{
                        enabled:true,
                        style: {
                            fontSize: '15px',
                            colors:undefined
                        }
                    },
                    legend:{
                        // position:"bottom",
                        offsetY:130,
      horizontalAlign: 'center', 
      floating: false,
      fontSize: '18px',
      fontFamily: 'Saira Semi Condensed',
      fontWeight: 400,
                        labels: {
                            colors: '#ffff',
                        },
                        itemMargin: {
                            horizontal: 20,
                            vertical: 5
                        },
                    },
                       colors:["#FFD700","#A9BE1B","#629E33","#2A7B3D","#00563B","#006158"],
                      labels:pieChartData.labels                  

                 }}
                 
                >
                </Chart>
            </div>
            <div className="full-width swiper-parent_div">
                <div className="center">
            <h1 className='swiper-title'>What does the <span className='text-warning'>Quad</span> token do for you?</h1>
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper swiper"
      >
        <SwiperSlide className='swiper-slide'>
          <div className="card shadow swiper-card">
            <div className="swiper-img_div">
                <RiAdvertisementFill className="swiper-icon"/>
            </div>
            <div className="body-card swiper-body_card">
                <h4>Walpaper Advertising</h4>
                <p className='text-center'>Use our Ad Manager to place wallpaper ads (2560x1440px) in your country or region and reach hundreds of thousands of Quadrium users with your business.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className="card shadow swiper-card">
            <div className="swiper-img_div">
                <GrDiamond className="swiper-icon"/>
            </div>
            <div className="body-card swiper-body_card">
                <h4>Premium Services</h4>
                <p className='text-center'>As a Business or Premium user, you enjoy valuable security features. They guarantee the authenticity and integrity of sensitive company data. With the new Quadrium 3.0, you get unlimited file transfer and storage capabilities. Still, you can also time-stamp your data via publicly verifiable proof and share it with your customers or co-workers via the decentralized network you define.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className="card shadow swiper-card">
            <div className="swiper-img_div">
                <MdMovieFilter className="swiper-icon"/>
            </div>
            <div className="body-card swiper-body_card">
                <h4>Your data transfer and your design</h4>
                <p className='text-center'>Use your company's corporate identity for data transfer with Quadrium. Define your own URL and turn your website into another marketing channel.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className="card shadow swiper-card">
            <div className="swiper-img_div">
                <FaCartArrowDown className="swiper-icon"/>
            </div>
            <div className="body-card swiper-body_card">
                <h4>Paid Download</h4>
                <p className='text-center'>Create your download link in seconds and sell digital products through Quadrium - without an e-commerce system. Then, send and share your encrypted data with customers, friends or business partners via a paid download link.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className="card shadow swiper-card">
            <div className="swiper-img_div">
                <BsClipboardData className="swiper-icon"/>
            </div>
            <div className="body-card swiper-body_card">
                <h4>Big Data (Object Storage)</h4>
                <p className='text-center'>With Quadrium 3.0, you can store large amounts of data without limits because the storage is object and file-based. In addition, these storage types are not limited to specific capacities. Instead, they can scale to multiple terabytes or petabytes to meet your needs.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className="card shadow swiper-card">
            <div className="swiper-img_div">
                <RiTeamFill className="swiper-icon"/>
            </div>
            <div className="body-card swiper-body_card">
                <h4>Team Management</h4>
                <p className='text-center'>With Quadrium, you can easily share files and folders and customize data management for your team. Collaborate with internal and external colleagues through a secure and user-friendly interface - whether on PC, MAC or mobile device.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
            </div>
                </div>

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

export default Main