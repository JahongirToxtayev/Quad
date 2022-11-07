import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Roadmap from './components/Roadmap/Roadmap';
import Products from './components/Products/Products';
import Staking from './components/Staking/Staking';
import QuadOs from './components/Products/QuadOs/QuadOs';
import QuadEx from './components/Products/QuadEx/QuadEx';
import QuadPay from './components/Products/QuadPay/QuadPay';
import QuadWallet from './components/Products/QuadWallet/QuadWallet';
import NFT from './components/Products/Nft/NFT';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/Roadmap' element={<Roadmap/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/Staking' element={<Staking/>}/>
    <Route path='/Products/QuadOs' element={<QuadOs/>}/>
    <Route path='/Products/QuadEx' element={<QuadEx/>}/>
    <Route path='/Products/QuadPay' element={<QuadPay/>}/>
    <Route path='/Products/QuadWallet' element={<QuadWallet/>}/>
    <Route path='/Products/NFT' element={<NFT/>}/>



  </Routes>
  </BrowserRouter>
);

