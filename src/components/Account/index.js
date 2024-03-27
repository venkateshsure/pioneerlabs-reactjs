import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

import './index.css'

const Account=()=>{
    return (
        <div className="account">
            <div className="account-con">
                <div>
                    <FaRegUserCircle/>
                </div>
                <div className="account-text-con">
                   <h2 className="account-head-text">Venkatesh</h2>
                   <p className="account-para-text">venkatesh@sure.com</p>
                </div>
                <div className="account-three-dots-con">
                    <BsThreeDotsVertical/>
                </div>
            </div>
        </div>
    )
}

export default Account