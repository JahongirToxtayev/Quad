import {useState} from "react"
import Main from "./components/Navbar/Main";
import {Route,Routes} from "react-router-dom"
import Roadmap from './components/Roadmap/Roadmap';
import Products from './components/Products/Products';
import Staking from './components/Staking/Staking';
import QuadOs from './components/Products/QuadOs/QuadOs';
import QuadEx from './components/Products/QuadEx/QuadEx';
import QuadPay from './components/Products/QuadPay/QuadPay';
import QuadWallet from './components/Products/QuadWallet/QuadWallet';
import NFT from './components/Products/Nft/NFT';
import { WhatQuad } from './components/Read More/WhatQuad';
import { WhatOurGoal } from './components/Read More/WhatOurGoal';
import { IntlProvider } from 'react-intl';





const messages={en:{
  welcome:"Welcome to Quadrium",
  blockchainEco:"Blockchain Ecosystem",
  buyNowBtn:"BUY NOW",
  whitepaperBtn:"WHITEPAPER",
  whatQuadTitle:"What is Quadrium",
  whatQuadSubtitle:"Quadrium (QUAD) is a utility token of the Quadrium company, and this token is one of the main elements of the company's ecosystem. This token is a digital share by nature, by purchasing it you become a part of the company and one of its owners.",
  readMore:"Read More",
  whatGoalTitle:"What is our ",
  whatGoalSubtitle:"Given that QUAD is the main financial element of the Quadrium ecosystem, it is not impossible for this digital asset to reach a value of $1. Several important factors should be taken into account. The total emission of QUAD is 10,000,000,000,000 units. To increase the price of QUAD, the team will eliminate 50% of the total issue after the presale",
  structureTitle:"Structure of the",
  strcDefi:"DeFI is considered one of the main utilities of the Quadrium esystem. Quad Wallet is the main gateway to the Quadrium ecosystem",
  strcQuadPayTitle:"Payments",
  strcQuadPay:"QuadPay is a new generation payment system that complements the DeFi system based on blockchain protocols",
  strcQuadEx:"Quadswap and QuadEX are the Quadrium company's flagship products in these areas and will drive QUAD's growth",
  strcNft:"Quad NFT marcetplace is part of the Quadrium ecosystem, where artists can sell their NFTs at 0% commission",
  strcNftTitle:"NFT Marketplace",
  strcWeb:"QuadOS is a multifunctional blockchain operating system, the main task of which is to process large amounts of information and algorithmically convert them into computer programs",
  swiperTitle:"What does the Quad token do for you?",
  swiperPremTitle:"Premium Services",
  swiperPremSubtitle:"As a Business or Premium user, you enjoy valuable security features. They guarantee the authenticity and integrity of sensitive company data. With the new Quadrium 3.0, you get unlimited file transfer and storage capabilities. Still, you can also time-stamp your data via publicly verifiable proof and share it with your customers or co-workers via the decentralized network you define.",
  swiperAdsTitle:"Walpaper Advertising",
  swiperAdsSubtitle:"Use our Ad Manager to place wallpaper ads (2560x1440px) in your country or region and reach hundreds of thousands of Quadrium users with your business",
  swiperDataTrsTitle:"Your data transfer and your design",
  swiperDataTrsSubtitle:"Use your company's corporate identity for data transfer with Quadrium. Define your own URL and turn your website into another marketing channel",
  swiperPaidTitle:"Paid Download",
  swiperPaidSubtitle:"Create your download link in seconds and sell digital products through Quadrium - without an e-commerce system. Then, send and share your encrypted data with customers, friends or business partners via a paid download link",
  swiperBigDataTitle:"Big Data (Object Storage)",
  swiperBigDataSubtitle:"With Quadrium 3.0, you can store large amounts of data without limits because the storage is object and file-based. In addition, these storage types are not limited to specific capacities. Instead, they can scale to multiple terabytes or petabytes to meet your needs",
  swiperTeamTitle:"Team Management",
  swiperTeamSubtitle:"With Quadrium, you can easily share files and folders and customize data management for your team. Collaborate with internal and external colleagues through a secure and user-friendly interface - whether on PC, MAC or mobile device",
  navbarHome:"Home",
  navbarCompany:"Company",
  navbarRoadMap:"Roadmap",  
  navbarProducts:"Products",
  footerWhatQuad:"What is Quad ?",
  footerWhatGoal:"What is our goal ?",
  footerWallet:"Quad Wallet",
  footerRights:"All Rights Reserved",
  logIn:"Log In",
  register:"Register",

  },
  uz:{
  welcome:"Quadriumga xush kelibsiz",
  blockchainEco:"Blokcheyn Ekotizimi",
  buyNowBtn:"SOTIB OLISH",
  whitepaperBtn:"WHITEPAPER",
  whatQuadTitle:`Quadrium aslida nima`,
  whatQuadSubtitle:"Quadrium (QUAD) – Quadrium kompaniyasining utility tokeni bo’lib, ushbu token kompaniyaning ekosistemasining asosiy elementlaridan biridir. Ushbu token xarakteriga ko’ra raqamli aksiya bo’lib, uni sotib olish orqali siz kompaniyaning bir qismiga hamda uning egalaridan  biriga aylanasiz.",
  readMore:"Batafsil",
  whatGoalTitle:"Quadriumning asosiy maqsadi",
  whatGoalSubtitle:"QUAD Quadrium ekosistemasining asosiy moliyaviy elementi ekanligini hisobga olsak, ushbu raqamli aktivning 1 dollar qiymatga erishishi imkonsiz emas. Bunda bir nechta muhim faktorlarni inobatga olish lozim bo’ladi:",
  structureTitle:"Quadrium Ekotizimining Tuzilishi",
  strcDefi:"DeFI Quadrium tizimining asosiy yordamchi dasturlaridan biri hisoblanadi. Quad Wallet - bu Quadrium ekotizimiga kirishning asosiy eshigidir",
  strcQuadPayTitle:"To'lovlar",
  strcQuadPay:"QuadPay yangi avlod toʻlov tizimi boʻlib, blokcheyn protokollari asosidagi DeFi tizimini toʻldiradi",
  strcQuadEx:"Quadswap va QuadEX bu sohalarda Quadrium kompaniyasining eng muhim mahsulotlari bo'lib, QUADning o'sishiga yordam beradi",
  strcNft:"Quad NFT Savdosi - bu Quadrium ekotizimining bir qismi bo'lib, u yerda san'at ixlosmandlari va uning ijodkorlari o'zlarining NFTlarini 0% komissiyaga sotishlari mumkin",
  strcNftTitle:"NFT Savdosi",
  strcWeb:"QuadOS ko'p funktsiyali blokcheyn operatsion tizimi bo'lib, uning asosiy vazifasi katta hajmdagi ma'lumotlarni qayta ishlash va ularni algoritmik ravishda kompyuter dasturlariga aylantirishdir",
  swiperTitle:"Quad token sizga qanday afzalliklar taqdim qiladi?",
  swiperPremTitle:"Premium Xizmatlar",
  swiperPremSubtitle:"Biznes yoki Premium foydalanuvchi sifatida siz qimmatbaho xavfsizlik xususiyatlaridan bahramand bo'lasiz. Ular kompaniyaning maxfiy ma'lumotlarining haqiqiyligi va yaxlitligini kafolatlaydi. Yangi Quadrium 3.0 bilan siz cheksiz fayllarni uzatish va saqlash imkoniyatlariga ega bo'lasiz.",
  swiperAdsTitle:"Reklama Berish",
  swiperAdsSubtitle:"Mamlakatingiz yoki mintaqangizda fon rasmi reklamalarini (2560x1440px) joylashtirish va biznesingiz bilan yuz minglab Quadrium foydalanuvchilarini jalb qilish uchun reklama menejerimizdan foydalaning",
  swiperDataTrsTitle:"Ma'lumotlarni Uzatish va Dizayn",
  swiperDataTrsSubtitle:"Quadrium bilan ma'lumotlarni uzatish uchun kompaniyangizning korporativ identifikatoridan foydalaning. O'zingizning URL manzilingizni belgilang va veb-saytingizni boshqa marketing kanaliga aylantiring",
  swiperPaidTitle:"Pullik Yuklab olish",
  swiperPaidSubtitle:"Bir necha soniya ichida yuklab olish havolasini yarating va raqamli mahsulotlarni Quadrium orqali elektron tijorat tizimisiz soting. Keyin, pullik yuklab olish havolasi orqali shifrlangan ma'lumotlaringizni mijozlar, do'stlar yoki biznes hamkorlaringizga yuboring va ular bilan baham ko'ring",
  swiperBigDataTitle:"Katta Ma'lumotlar (Ob'ektni Saqlash)",
  swiperBigDataSubtitle:"Quadrium 3.0 yordamida siz katta hajmdagi ma'lumotlarni cheksiz saqlashingiz mumkin, chunki saqlash ob'ekt va faylga asoslangan. Bundan tashqari, ushbu saqlash turlari ma'lum imkoniyatlar bilan cheklanmaydi. Buning o'rniga ular sizning ehtiyojlaringizni qondirish uchun bir necha terabayt yoki petabaytgacha bo'lgan o'lchamlarni zaxiralashga qodir",
  swiperTeamTitle:"Jamoani Boshqarish",
  swiperTeamSubtitle:"Quadrium yordamida siz osongina fayl va papkalarni almashishingiz va jamoangiz uchun ma'lumotlar boshqaruvini sozlashingiz mumkin. Xavfsiz va foydalanuvchilarga qulay interfeys orqali ichki va tashqi hamkasblar bilan xoh kompyuterda, xoh iMACda yoki mobil qurilmada hamkorlik qiling",
  navbarHome:"Asosiy",
  navbarCompany:"Biz haqimizda",
  navbarRoadMap:"Xarita",
  navbarProducts:"Mahsulotlar",
  footerWhatQuad:"Quad nima ?",
  footerWhatGoal:"Bizning maqsadimiz ?",
  footerWallet:"Quad Hamyon",
  footerRights:"Barcha Xizmatlar Litsenziyalangan",
  logIn:"Kirish",
  register:"Ro'yxatdan o'tish",




  }}


function App() {

  const [locale, setLocale] = useState("en")

const handleChange=(e)=>{
setLocale(e.target.value)
console.log(locale,"Select");
}
  return (
    <>
  <IntlProvider locale={locale} messages={messages[locale]}>
  <Routes>
      <Route path='/' element={<Main locale={locale} handleChange={handleChange}/>}/>
    <Route path='/Roadmap' element={<Roadmap/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/Staking' element={<Staking/>}/>
    <Route path='/Products/QuadOs' element={<QuadOs/>}/>
    <Route path='/Products/QuadEx' element={<QuadEx/>}/>
    <Route path='/Products/QuadPay' element={<QuadPay/>}/>
    <Route path='/Products/QuadWallet' element={<QuadWallet/>}/>
    <Route path='/Products/NFT' element={<NFT/>}/>
    <Route path='/what-quad' element={<WhatQuad locale={locale}/>}/>
    <Route path='/what-our-goal' element={<WhatOurGoal locale={locale}/>}/>
    </Routes>
    </IntlProvider>
    </>
  );
}

export default App;
