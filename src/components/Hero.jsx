import React from 'react'
import styles from '../style';
import discount from '../assets/Discount.svg';
import handshake from '../assets/handshake.png';
import GetStarted from './GetStarted';
import newHero from '../assets/newHero.png'; {/* pretty small, transform doesnt work bc of empty space in img */}
import newHeroCrop from '../assets/newHeroCrop.png'; {/* transform stays at 150  */}
import newHandshake from '../assets/newHandshake.png'; {/* larger img, but less bright  */}

const Hero = () => (  
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py[6px] px-2 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount}
          alt="discount"
          className="w-[20px] h-[20px]"/>
          <p className={`${styles.paragraph} ml-2`}>Initial
            <span className="text-white"></span>  {" "}Consultation
              <span className="text-white"> At No Cost</span>{" "}              
          </p>

        </div>
        <div className="flex flex-row justify-between items-start w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">Risk Consulting <br className="sm:block hidden"/><span className="text-gradient">At Its Best</span>{" "}</h1>
          <div className="ss:flex hidden md:mr-4 ml-5 mr-0">
              <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"> With DRMS</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 heroIntro`}>Boutique Risk Management and Loss Prevention Services that are customized for the individual needs of each client</p>
      </div>
      <div>        
        <img src={newHeroCrop} alt="handshake" className="relative w-full h-[auto] transform scale-150 bottom-20 z-[5] handshake"/>  {/* max-w-[64rem]  */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>         
        <div className="absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient"/>  
      </div>

      <div className={`ss:hidden ${styles.flexCenter} `}>
      <div className="absolute z-[0] w-[80%] h-[90%] -right-[50%] rounded-full white__gradient sm:hidden"/>                  
      <div className="absolute z-[0] w-[80%] h-[90%] -right-[50%] rounded-full      blue__gradient sm:hidden"/>               
        <GetStarted />        
      </div>
    </section>

  )

export default Hero