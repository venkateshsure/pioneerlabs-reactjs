import { GiHamburgerMenu } from "react-icons/gi";

import './index.css'

const Header=()=>{
    return (
        <div className="header">
            <div className="header-con">
                <h1 className="header-para">Carbon Cell</h1>
                <GiHamburgerMenu className="hamburger-menu"/>
            </div>
        </div>
    )
}

export default Header