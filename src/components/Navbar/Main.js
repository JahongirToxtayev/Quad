import {React,useEffect} from 'react'
import "../Navbar/Main.css"
import QuadImg from "../../assets/Slice_1-removebg-preview.png"
import StructureSection from "../StructureSection";
import Chart from "react-apexcharts";
import Navbar from './NavbarAndFooter/Navbar/Navbar';
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom"
import {RiAdvertisementFill,RiTeamFill} from "react-icons/ri"
import {GrDiamond} from "react-icons/gr"
import {MdMovieFilter} from "react-icons/md"
import {FaCartArrowDown} from "react-icons/fa"
import {BsClipboardData} from "react-icons/bs"
import AOS from 'aos';
import "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination,Autoplay} from "swiper";
import Footer from './NavbarAndFooter/Footer/Footer';

//import format js
import {FormattedMessage} from "react-intl"


let pieChartData={
    series:[50,30,5,5,5,5],
    labels:['5,000,000,000,000 (50%) QUAD will be burned by sending to a dead wallet after pre-sale.', '3,000,000,000,000 (30%) QUAD will be blocked to provide liquidity', 
    '500,000,000,000 (5%) will be allocated for marketing and promotion of QUAD', 
    '500,000,000,000 (5%) QUAD will be airdropped to the Quadrium crypto community', 
    '500,000,000,000 (5%) belong to the QUAD community',
    "500,000,000,000 (5%) QUAD will be blocked for later activation"],
    labelsUz:["5 000 000 000 000 (50%) QUAD  pre-sale dan keyin o’lik hamyon (Dead wallet) ga jo’natish orqali yo’q qilinadi.",
  "5 000 000 000 000 (50%) QUAD  pre-sale dan keyin o’lik hamyon (Dead wallet) ga jo’natish orqali yo’q qilinadi.",
"500 000 000 000 (5%) QUAD marketing va promotion uchun yo’naltiriladi.",
'500 000 000 000 (5%) QUAD Quadrium kripto hamjamiyati o’rtasida airdrop shaklida tarqatiladi',
"500 000 000 000 (5%) QUAD esa jamoaga tegishli bo'ladi",
"500 000 000 000 (5%) QUAD keyinchalik ishga tushirish uchun bloklanadi."]
}



const Main = ({handleChange,locale}) => {
  

  useEffect(() => {
    AOS.init({
        duration:1000
    });
}, [])


  return (
    <>
    <div >
        <Navbar locale={locale} handleChange={handleChange}/>

        <div className="quads-parent_div">

            <div className="quads-title_backDiv">
               <div className="quads-div_title">
               <h1 className='quads-title'>
                <FormattedMessage
                id='welcome'
                value={{locale}}>
                </FormattedMessage>
                </h1> 
               <h3 className='quads-subtitle'><FormattedMessage
                id='blockchainEco'
                value={{locale}}>
                </FormattedMessage></h3>
               <div className="quads-btns_div">
                <button className='first-btn'><FormattedMessage
                id='buyNowBtn'
                value={{locale}}>
                </FormattedMessage></button>
                <button className='first-btn'><FormattedMessage
                id='whitepaperBtn'
                value={{locale}}>
                </FormattedMessage></button>
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
                <h4 className='what-quad_subtitle'>Quadrium <FormattedMessage
                id='blockchainEco'
                value={{locale}}>
                </FormattedMessage></h4>
                <h3 className='what-quad_title'><FormattedMessage
                id='whatQuadTitle'
                value={{locale}}>
                </FormattedMessage><span className={locale=="uz"?"d-none":'text-warning'}>(QUAD)</span>?</h3>
                <p className='what-quad_text'><FormattedMessage
                id='whatQuadSubtitle'
                value={{locale}}>
                </FormattedMessage></p>
            </div>
            <div className="what-quad_btnDiv">
                <Link to="/what-quad">
                <button className='what-quad_btn'><FormattedMessage
                id='readMore'
                value={{locale}}>
                </FormattedMessage></button>
                </Link>
            </div>
            </div>
            
        </div>

    <div className="what-goal_parentDiv row g-0 p-5">
        <div className="what-goal_childDiv col-lg-6 col-12" data-aos={"zoom-out-right"}>
            <h4><FormattedMessage
                id='whatGoalTitle'
                value={{locale}}>
                </FormattedMessage><span className={locale=="uz"?"d-none":'text-warning'}>goal</span> ?</h4>
            <p><FormattedMessage
                id='whatGoalSubtitle'
                value={{locale}}>
                </FormattedMessage></p>
                <Link to={"/what-our-goal"}>
            <button className='what-quad_btn'><FormattedMessage
                id='readMore'
                value={{locale}}>
                </FormattedMessage></button>
                </Link>
        </div>
    </div>

    <StructureSection locale={locale}/>

    <div className="pie-chart">
                <Chart 
                type="pie"
                height={580}
                series={pieChartData.series}            
                
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
                        text: locale=="uz"?"Quad Miqdori" :"Tokenomics",
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
                      labels:locale=="uz"? pieChartData.labelsUz:pieChartData.labels                  

                 }}
                 
                >
                </Chart>
            </div>
            <div className="full-width swiper-parent_div">
                <div className="center">
            <h1 className='swiper-title'><FormattedMessage
                id='swiperTitle'
                value={{locale}}>
                </FormattedMessage> </h1>
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
                <GrDiamond className="swiper-icon"/>
            </div>
            <div className="body-card swiper-body_card">
            <h4><FormattedMessage
                id='swiperPremTitle'
                value={{locale}}>
                </FormattedMessage></h4>
                <p className='text-center'><FormattedMessage
                id='swiperPremSubtitle'
                value={{locale}}>
                </FormattedMessage></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className="card shadow swiper-card">
            <div className="swiper-img_div">
                <RiAdvertisementFill className="swiper-icon"/>
            </div>
            <div className="body-card swiper-body_card">
            <h4><FormattedMessage
                id='swiperAdsTitle'
                value={{locale}}>
                </FormattedMessage></h4>
                <p className='text-center'><FormattedMessage
                id='swiperAdsSubtitle'
                value={{locale}}>
                </FormattedMessage></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className="card shadow swiper-card">
            <div className="swiper-img_div">
                <MdMovieFilter className="swiper-icon"/>
            </div>
            <div className="body-card swiper-body_card">
                <h4><FormattedMessage
                id='swiperDataTrsTitle'
                value={{locale}}>
                </FormattedMessage></h4>
                <p className='text-center'><FormattedMessage
                id='swiperDataTrsSubtitle'
                value={{locale}}>
                </FormattedMessage></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className="card shadow swiper-card">
            <div className="swiper-img_div">
                <FaCartArrowDown className="swiper-icon"/>
            </div>
            <div className="body-card swiper-body_card">
                <h4><FormattedMessage
                id='swiperPaidTitle'
                value={{locale}}>
                </FormattedMessage></h4>
                <p className='text-center'><FormattedMessage
                id='swiperPaidSubtitle'
                value={{locale}}>
                </FormattedMessage></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className="card shadow swiper-card">
            <div className="swiper-img_div">
                <BsClipboardData className="swiper-icon"/>
            </div>
            <div className="body-card swiper-body_card">
                <h4><FormattedMessage
                id='swiperBigDataTitle'
                value={{locale}}>
                </FormattedMessage></h4>
                <p className='text-center'><FormattedMessage
                id='swiperBigDataSubtitle'
                value={{locale}}>
                </FormattedMessage></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className="card shadow swiper-card">
            <div className="swiper-img_div">
                <RiTeamFill className="swiper-icon"/>
            </div>
            <div className="body-card swiper-body_card">
                <h4><FormattedMessage
                id='swiperTeamTitle'
                value={{locale}}>
                </FormattedMessage></h4>
                <p className='text-center'><FormattedMessage
                id='swiperTeamSubtitle'
                value={{locale}}>
                </FormattedMessage></p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
            </div>
                </div>

                <Footer locale={locale}/>

            
            
    </>
  )
}

export default Main