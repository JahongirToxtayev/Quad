import React from 'react'
import "./Nft.css"
import NFT1 from "../../../assets/NFT 1.png"
import NFT2 from "../../../assets/NFT 2.png"
import NFT3 from "../../../assets/NFT 3.png"
import Navbar from '../../Navbar/NavbarAndFooter/Navbar/Navbar'


const NFT = () => {
  return (
    <>
    <Navbar/>
    <div className="parent-div_bg">
      <div className="parent-div row">
      <div className="col-lg-4 col-12 child-div mx-3">
      <div>
      <div className="child-div-img">
        <img src={NFT1} alt="" />
      </div> 
      <div className="body-card my-3">
      <h3 className='fw-bold text-center'>COMISSION FEE</h3>
      <p className='fs-3 text-center'>Quad NFT marketplace is the world's first zero fee marketplace</p>
      </div>
      </div>
      </div>
      <div className="col-lg-4 col-12 child-div mx-3">
      <div>
      <div className="child-div-img">
        <img src={NFT2} alt="" />
      </div> 
      <div className="body-card my-3">
      <h3 className='fw-bold text-center'>UNIVERSALITY</h3>
      <p className='fs-3 text-center'>Quad NFT marketplace supports more than 10 blockchains</p>
      </div>
      </div>
      </div>
      <div className="col-lg-4 col-12 child-div mx-3">
      <div>
      <div className="child-div-img">
        <img src={NFT3} alt="" />
      </div> 
      <div className="body-card my-3">
      <h3 className='fw-bold text-center'>STAKING</h3>
      <p className='fs-3 text-center'>Customers can earn QUAD tokens by staking Quad Collection NFTs</p>
      </div>
      </div>
      </div>


      </div>

    </div>
    </>
  )
}

export default NFT