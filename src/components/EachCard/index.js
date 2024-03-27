import './index.css'

const EachCard = (props)=>{
    const {each}=props
    console.log(each)
    return (
        <li className='eachcard-con'>
            <p className='eachcard-text'><span className='eachcard-span-ele'>Code: </span>{each.code}</p>
            <p className='eachcard-text'><span className='eachcard-span-ele'>Symbol: </span>{each.symbol}</p>
            <p className='eachcard-text'><span className='eachcard-span-ele'>Rate: </span>{each.rate}</p>
            <p className='eachcard-text'><span className='eachcard-span-ele'>Description: </span>{each.description}</p>
        </li>
    )
}

export default EachCard