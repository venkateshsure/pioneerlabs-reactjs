import {useState,useEffect} from 'react'

import EachCard  from '../EachCard'

import './index.css'

const CryptoCurrency=()=>{
    const [cryptoData,SetCryptoData]=useState([])

    useEffect(()=>{
        const getData=async ()=>{
            const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            const data = await response.json()
            console.log(data)
            const arrayOfObjects = Object.entries(data).map(([key, value]) => ({value }));
            const array = arrayOfObjects[3]
            const arrayValues={...array.value}
            const currenciesArray = Object.values(arrayValues)
            SetCryptoData(currenciesArray)
        }
        getData()
    },[])

    // console.log(cryptoData)

    return (
        <div className='crypto-currency'>
            <div className='crypto-currency-con'>
                <h2 className='crypto-head-text'>Bitcoin Currency Prices</h2>
                <ul className='crypto-currency-ul-con'>
                    {
                        cryptoData.map(each=>(
                           <EachCard each={each}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default CryptoCurrency

