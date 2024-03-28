

import {Link} from 'react-router-dom'
import {Component} from 'react'

import { RiHistoryFill } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

import Account from "../Account";

import './index.css'

class Navbar extends Component{

    state={activeTab:"/"}

    handleTabClick = (tabName) => {
        this.setState({ activeTab: tabName });
    };

   render(){ 
    const {activeTab} = this.state

    return (
        <div className='navbar'>
            <div className='navbar-con'>
                <div className="first-navbar-icons-con">
                    <div className="sidebar-icons-con user-icon">
                        <FaRegUserCircle/>
                        <span className='navbar-span-ele'>Account</span>
                    </div>
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
                <Account/>
            </div>
        </div>
    </div>
    )
}
}

export default Navbar
