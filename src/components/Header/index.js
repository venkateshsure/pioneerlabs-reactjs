
import Navbar from "../Navbar";

import { GiHamburgerMenu } from "react-icons/gi";

import './index.css'

const Header=()=>{
    return (
        <div className="header">
            <div className="header-con">
                <h1 className="header-para">Carbon Cell</h1>
            </div>
            <GiHamburgerMenu className="hamburger-menu"/>
        </div>
    )
}

export default Header