import React from 'react'
import "../Navbar/Main.css"
import QuadImg from "../../assets/Slice_1-removebg-preview.png"
import StructureSection from "../StructureSection";
import Chart from "react-apexcharts";
import Navbar from './NavbarAndFooter/Navbar/Navbar';


let pieChartData={
    series:[50,30,5,5,5,5],
    labels:['5,000,000,000,000 (50%) QUAD will be burned by sending to a dead wallet after pre-sale.', '3,000,000,000,000 (30%) QUAD will be blocked to provide liquidity', 
    '500,000,000,000 (5%) will be allocated for marketing and promotion of QUAD', 
    '500,000,000,000 (5%) QUAD will be airdropped to the Quadrium crypto community', 
    '500,000,000,000 (5%) belong to the QUAD community',
    "500,000,000,000 (5%) QUAD will be blocked for later activation"]
}

const Main = () => {
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
           <div className="what-quad_img col-5">
            <img src={QuadImg} alt="" />
            </div>
            <div className="what-quad_textParent col-7">
            <div className="what-quad_textDiv p-4">
                <h4 className='what-quad_subtitle'>Quadrium Blockchain Ecosystem</h4>
                <h3 className='what-quad_title'>What is Quadrium(QUAD)?</h3>
                <p className='what-quad_text'>Quadrium (QUAD) is a utility token of the Quadrium company, and this token is one of the main elements of the company's ecosystem. This token is a digital share by nature, by purchasing it you become a part of the company and one of its owners.</p>
            </div>
            <div className="what-quad_btnDiv">
                <button className='what-quad_btn'>Read More</button>
            </div>
            </div>
            
        </div>

    <div className="what-goal_parentDiv row g-0 p-5">
        <div className="what-goal_childDiv col-lg-6 col-12">
            <h4>What is our <span className='text-warning'>goal</span> ?</h4>
            <p>Quadrium (QUAD) is a utility token of the Quadrium company, and this token is one of the main elements of the company's ecosystem. This token is a digital share by nature, by purchasing it you become a part of the company and one of its owners.</p>
            <button className='what-quad_btn'>Read More</button>
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

            
            
    </>
  )
}

export default Main