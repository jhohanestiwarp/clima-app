import React from 'react'
import { WeatherData } from '../interfaces/WeatherData'

const Degrate = ({data: {temp, description, icon}}: {data: WeatherData}) => {
  return (
    <>
    <section className='text-5xl font-bold text-white '>
        <span className='text-yellow-500' id='temperature'>{temp}</span>
        °C

        
    </section>
    <section >
        <img src={icon} alt="" id='iconImg' />

    </section>
    <section className='font bold uppercase text-white mb-6 ' id='description'>
        {description}
    </section>
    </>
  )
}

export default Degrate