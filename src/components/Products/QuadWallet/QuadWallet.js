import React from 'react'
import "./QuadWallet.css"
import WalletImg from "../../../assets/wallet.png"
import Navbar from '../../Navbar/NavbarAndFooter/Navbar/Navbar'

const QuadWallet = () => {
  return (
    <>
    <Navbar/>
    <div className="quad-wallet_parentDiv">
        <div className="quad-wallet_childDiv row g-0">
            <div className="quad-wallet_img col-6">
                <img src={WalletImg} alt="" />
            </div>
            <div className="quad-wallet_titleDiv col-6">
                <h2 className='quad-wallet_title'> <span className='text-warning'>Quad</span> Wallet</h2>
                <h3 className='quad-wallet_subtitle'>Quad wallet is the gateway to the Quadrium DeFi ecosystem</h3>
                <ul className='quad-wallet_description'>
                    <li>Easy to use</li>
                    <li>Maximum simplicity</li>
                    <li>Maximum level of security</li>
                    <li>Staking opportunity</li>
                    <li>Ability to buy BEP20 and ERC20 tokens directly</li>
                </ul>
            </div>

        </div>
    </div>
    </>
  )
}

export default QuadWallet