
import ChartData from '../ChartData'
import CryptoCurrency from '../CryptoCurrency'
import MetaMaskIntegration from '../MetaMaskIntegration'

// import Header from '../Header'
import Search from '../Search'

import './index.css'

const Content=()=>{
    return (
        <div className='content'>
        <div className='content-con'>
            <div className='fir-content-con'>
                <div className='fir-content-text-con'>
                    <p className='fir-content-para'>Hello,<span className='fir-content-para-span'>Venkatesh</span> </p>
                    <p className='fir-content-text'>Welcome to <span className='fir-content-span'>Spot trading !</span></p>
                </div>
                <div  className='sidebar-media-queries'>
                   <Search />
                </div>
                <div className='fir-btn-con'>
                    <button type="button" className='btn'>Start Trading</button>
                </div>
            </div>
            <ChartData />
            <CryptoCurrency />
            <MetaMaskIntegration/>
        </div>
        </div>
    )
}

export default Content


/*   
*/