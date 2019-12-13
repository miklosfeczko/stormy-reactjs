import React from 'react'


const Forecast = ({data}) => {
  
  return data && data.list ? (
    <div>
      {console.log(data.list)}
      {data.list.map(single => {
        return (
          <div key={single.dt} className='data__container'>
            <p>{single.dt_txt}</p>
            <img
              src={`http://openweathermap.org/img/wn/${single.weather[0].icon}@2x.png`}
              alt='weather icon'
            />
            <p className='temperature'>{Math.round(single.main.temp)}°</p>
            <p>{single.weather[0].description}</p>
            <p>wind speed:{' '}{single.wind.speed}{' '}mph</p>
          </div>
        )
      })}
    </div>
  ) : null
}

export default Forecast