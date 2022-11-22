import {React,useEffect} from 'react';
import "./style.css"
import icon1 from "../../assets/icons/img.png"
import {RiGalleryFill,RiSecurePaymentFill} from "react-icons/ri"
import {GiTwoCoins} from "react-icons/gi"
import {FaChartLine} from "react-icons/fa"
import AOS from 'aos';
import "aos";
import "aos/dist/aos.css";


function Index() {
    useEffect(() => {
        AOS.init({
            duration:1000
        });
    }, [])

    return (
            <div className="structure-parentDiv">
                <div className="structure-title">
                    <h1>Structure of the <br/> <span className='text-warning'>Quadrium </span> Ecosystem</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className=" col-md-4 column1" >
                            <div className="info" data-aos={"fade-right"}>
                                <div className="left d-flex flex-column justify-content-center">
                                    <img className="icon" src={icon1} alt="icon"/>
                                    <h4>DeFi</h4>
                                </div>
                                <div className="right">
                                    <p>DeFI is considered one of the main utilities of the Quadrium esystem. Quad Wallet is the main gateway to the Quadrium ecosystem</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  column2" >
                            <div className="info" data-aos={"fade-right"}>
                                <div className="left d-flex flex-column justify-content-center me-2">
                                    <FaChartLine className='structure-icon'/>
                                    <h4>DEX & CEX</h4>
                                </div>
                                <div className="right">
                                    <p>Quadswap and QuadEX are the Quadrium company's flagship products in these areas and will drive QUAD's growth</p>
                                </div>
                            </div>
                            <div className="info" data-aos={"fade-right"}>
                                <div className="left d-flex flex-column justify-content-center nft me-2">
                                    <RiGalleryFill className='structure-icon'/>
                                    <h4>NFT Marketplace</h4>
                                </div>
                                <div className="right">
                                    <p>Quad NFT marcetplace is part of the Quadrium ecosystem, where artists can sell their NFTs at 0% commission</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  column3">
                            <div className="info" data-aos={"fade-right"}>
                                <div className="left d-flex flex-column justify-content-center me-4">
                                    <GiTwoCoins className='structure-icon'/>
                                    <h4>Payments</h4>
                                </div>
                                <div className="right">
                                    <p>QuadPay is a new generation payment system that complements the DeFi system based on blockchain protocolsn</p>
                                </div>
                            </div>
                            <div className="info" data-aos={"fade-right"}>
                                <div className="left d-flex flex-column justify-content-center me-2">
                                    <RiSecurePaymentFill className='structure-icon'/>
                                    <h4>Web 3.0</h4>
                                </div>
                                <div className="right">
                                    <p>QuadOS is a multifunctional blockchain operating system, the main task of which is to process large amounts of information and algorithmically convert them into computer programs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Index;