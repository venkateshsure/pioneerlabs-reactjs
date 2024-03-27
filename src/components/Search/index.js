
import { CiSearch } from "react-icons/ci";
import './index.css'

const Search=()=>{
    return (
        <div className="search">
            <div className="search-con">
                <CiSearch className="search-icon"/>
                <span className="search-text">Search</span>
            </div>
        </div>
    )
}

export default Search