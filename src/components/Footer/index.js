
import {Component} from 'react'

import { CiHome } from "react-icons/ci";
import { GoOrganization } from "react-icons/go";
import { GrCube } from "react-icons/gr";
import { LuArrowUpDown } from "react-icons/lu";

import {Link} from 'react-router-dom'

import './index.css'

class Footer extends Component{
    state={activeTab:""}

    handleTabClick = (tabName) => {
        this.setState({ activeTab: tabName });
    };

   render(){ 
    const {activeTab} = this.state
        return (
            <div className='footer'>
                <div className='footer-con'>
                    <div className={`footer-icons-con ${activeTab === '/' ? 'footer-active' : ''}`}>
                        <Link to="/" className='footer-nav-link' onClick={() => this.handleTabClick('/')}>
                            <CiHome className="icons"/>
                            <span className="text">Home</span>
                        </Link>
                    </div>
                    <div className={`footer-icons-con ${activeTab === '/org' ? 'footer-active' : ''}`}>
                        <Link to="/org" className='footer-nav-link' onClick={() => this.handleTabClick('/org')}>
                            <GoOrganization className="icons"/>
                            <span className="text">Organization</span>
                        </Link>
                    </div>
                    <div className='footer-btn-con'>
                        <button type="button" className='footer-btn'>Start Trading</button>
                    </div>
                    <div className={`footer-icons-con ${activeTab === '/assets' ? 'footer-active' : ''}`}>
                        <Link to="/assets" className='footer-nav-link' onClick={() => this.handleTabClick('/assets')}>
                            <GrCube className="icons"/>
                            <span className="text">Assets</span>
                        </Link>
                    </div>
                    <div className={`footer-icons-con ${activeTab === '/trade' ? 'footer-active' : ''}`}>
                        <Link to="/trade" className='footer-nav-link' onClick={() => this.handleTabClick('/trade')}>
                            <LuArrowUpDown className="icons"/>
                            <span className="text">Trade</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer