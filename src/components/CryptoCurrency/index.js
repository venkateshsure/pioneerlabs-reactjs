import {useState,useEffect} from 'react'


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

    console.log(cryptoData)

    return (
        <div className='crypto-currency'>
            <div className='crypto-currency-con'>
                <h1 className='crypto-text'>Crypto Currency Prices</h1>
                <h1 className='crypto-text'>Crypto Currency Prices</h1>
            </div>
        </div>
    )
}

export default CryptoCurrency