import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend , ResponsiveContainer} from 'recharts';

import {useState,useEffect} from 'react'

import './index.css'

const ChartData = () => {
    const [data,setPopulationData]=useState([])
    useEffect(()=>{
        const getData=async ()=>{
            const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            const fetchedData = await response.json()
            const {data}=fetchedData
            setPopulationData(data)
        }
        getData()
    },[])

    return (
        <ResponsiveContainer width="90%" height="100%">
            <LineChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Year" label={{ value: 'Year', position: 'bottom' }} />
                <YAxis className="YAxis" label={{ value: 'Population', angle: -90, position: 'insideRight' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Population" name="Population" stroke="#8884d8"/>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ChartData;
