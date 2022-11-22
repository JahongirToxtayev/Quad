import {React,useEffect} from 'react';
import "./style.css"
import icon1 from "../../assets/icons/img.png"
import {RiGalleryFill,RiSecurePaymentFill} from "react-icons/ri"
import {GiTwoCoins} from "react-icons/gi"
import {FaChartLine} from "react-icons/fa"
import AOS from 'aos';
import "aos";
import "aos/dist/aos.css";
//import format js
import {FormattedMessage} from "react-intl"


function Index({locale}) {
    useEffect(() => {
        AOS.init({
            duration:1000
        });
    }, [])

    return (
            <div className="structure-parentDiv">
                <div className="structure-title">
                    <h1><FormattedMessage
                id='structureTitle'
                value={{locale}}>
                </FormattedMessage><br/> <span className={locale=="uz"?"d-none":'text-warning'}>Quadrium  Ecosystem</span></h1>
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
                                    <p><FormattedMessage
                id='strcDefi'
                value={{locale}}>
                </FormattedMessage></p>
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
                                    <p><FormattedMessage
                id='strcQuadEx'
                value={{locale}}>
                </FormattedMessage></p>
                                </div>
                            </div>
                            <div className="info" data-aos={"fade-right"}>
                                <div className="left d-flex flex-column justify-content-center nft me-2">
                                    <RiGalleryFill className='structure-icon'/>
                                    <h4><FormattedMessage
                id='strcNftTitle'
                value={{locale}}>
                </FormattedMessage></h4>
                                </div>
                                <div className="right">
                                    <p><FormattedMessage
                id='strcNft'
                value={{locale}}>
                </FormattedMessage></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  column3">
                            <div className="info" data-aos={"fade-right"}>
                                <div className="left d-flex flex-column justify-content-center me-4">
                                    <GiTwoCoins className='structure-icon'/>
                                    <h4><FormattedMessage
                id='strcQuadPayTitle'
                value={{locale}}>
                </FormattedMessage></h4>
                                </div>
                                <div className="right">
                                    <p><FormattedMessage
                id='strcQuadPay'
                value={{locale}}>
                </FormattedMessage></p>
                                </div>
                            </div>
                            <div className="info" data-aos={"fade-right"}>
                                <div className="left d-flex flex-column justify-content-center me-2">
                                    <RiSecurePaymentFill className='structure-icon'/>
                                    <h4>Web 3.0</h4>
                                </div>
                                <div className="right">
                                    <p><FormattedMessage
                id='strcWeb'
                value={{locale}}>
                </FormattedMessage></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Index;