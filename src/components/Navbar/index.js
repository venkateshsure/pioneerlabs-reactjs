

import {Link} from 'react-router-dom'
import {Component} from 'react'

/* import { CiHome } from "react-icons/ci";
import { GoOrganization } from "react-icons/go";
import { GrCube } from "react-icons/gr";
import { LuArrowUpDown } from "react-icons/lu"; */
import { RiHistoryFill } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

// import Search from "../Search";
import Account from "../Account";
// import Header from '../Header';

import './index.css'

class Navbar extends Component{

    state={activeTab:"/"}

    handleTabClick = (tabName) => {
        this.setState({ activeTab: tabName });
    };

   render(){ 
    const {activeTab} = this.state
    console.log(activeTab)
    return (
        <div className='navbar'>
            <div className='sidebar-con'>
                <div className="first-sidebar-icons-con">
                    <div className={`sidebar-icons-con ${activeTab === '/history' ? 'active' : ''}`}>
                        <Link to="/history" className='nav-link' onClick={() => this.handleTabClick('/history')}>
                            <RiHistoryFill className="icons"/>
                            <span className="text">History</span>
                        </Link>
                    </div>
                    <div className={`sidebar-icons-con ${activeTab === '/wallet' ? 'active' : ''}`}>
                        <Link to="/wallet" className='nav-link' onClick={() => this.handleTabClick('/wallet')}>
                            <IoWalletOutline className="icons"/>
                            <span className="text">Wallet</span>
                        </Link>
                    </div>
                </div>
                <div className="second-sidebar-icons-con">
                    <div className={`sidebar-icons-con ${activeTab === '/notifications' ? 'active' : ''}`}>
                        <Link to="/notifications" className='nav-link' onClick={() => this.handleTabClick('/notifications')}>
                            <IoIosNotificationsOutline className="icons"/>
                            <span className="text">Notifications</span>
                        </Link>
                    </div>
                    <div className={`sidebar-icons-con ${activeTab === '/support' ? 'active' : ''}`}>
                        <Link to="/support" className='nav-link' onClick={() => this.handleTabClick('/support')}>
                            <CiCircleQuestion className="icons"/>
                            <span className="text">Support</span>
                        </Link>
                    </div>
                    <div className={`sidebar-icons-con ${activeTab === '/settings' ? 'active' : ''}`}>
                        <Link to="/settings" className='nav-link' onClick={() => this.handleTabClick('/settings')}>
                            <CiSettings className="icons"/>
                            <span className="text">Settings</span>
                        </Link>
                    </div>
                </div>
                <div className='fir-btn-con'>
                    <button type="button" className='btn'>Start Trading</button>
                </div>
                <Account/>
            </div>
        </div>
    )
}
}

export default Navbar