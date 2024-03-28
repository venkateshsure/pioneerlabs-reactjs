
import { CiSearch } from "react-icons/ci";
import './index.css'

const Search=()=>{

    const changeInput=e=>{
        
    }
    return (
        <div className="search">
            <div className="search-con">
                <CiSearch className="search-icon"/>
                <input type="search" onChange={changeInput} className="search-text" placeholder="search"/>
            </div>
        </div>
    )
}

export default Search