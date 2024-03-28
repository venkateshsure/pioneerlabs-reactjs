
import {useState} from 'react'

import Navbar from "../Navbar";

import { GiHamburgerMenu } from "react-icons/gi";

import { RxCross2 } from "react-icons/rx";

import './index.css'

const Header=()=>{
    const [menu,setMenu]=useState(false)
   const  hamburgerClicked=()=>{
        setMenu((pre)=>(!pre))
    }
    
    return (
        <div className="header">
            <div className="header-con">
               <div className='header-con-mobile-view'>
                    <img src="https://www.shutterstock.com/image-vector/golden-bitcoin-coin-crypto-currency-260nw-749467579.jpg"
                        alt="bitcoin" className='bitcoin-img'/>
                    <h1 className="header-para">Carbon Cell</h1>
                </div>
            </div>
            <div className='header-navbar-con'>
                { menu? <RxCross2 className="hamburger-menu" onClick={hamburgerClicked}/> :
                <GiHamburgerMenu className="hamburger-menu" onClick={hamburgerClicked}/>
                }
            </div>
            <div className='navbar-content-header-con'>{menu && <Navbar/> }</div>
        </div>
    )
}

export default Header

