
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
    console.log(menu)
    return (
        <div className="header">
            <div className="header-con">
                <h1 className="header-para">Carbon Cell</h1>
            </div>
            { menu? <RxCross2 className="hamburger-menu" onClick={hamburgerClicked}/> :
             <GiHamburgerMenu className="hamburger-menu" onClick={hamburgerClicked}/>
            }
            {menu && <Navbar/> }
        </div>
    )
}

export default Header

