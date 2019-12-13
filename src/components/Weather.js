import React from 'react'
import rainyPicture from './rainy_pic.png'
import cloudyPicture from './cloudy-pic.jpg'
import clearSkyPicture from './clearSky_pic.jpg'
import thunderPicture from './thunder-pic.jpg'
import snowyPicture from './snowy-pic.jpg'
import foggyPicture from './fog-pic.jpg'

const Weather = ({city, icon, temperature, description, country, error, wind}) => {

  const imageCloud = (
    <div
      className='bg'
      style={{
        backgroundImage: `url(${cloudyPicture})`
      }}
    ></div>
  )
  
  const imageRainy = (
    <div
      className='bg'
      style={{
        backgroundImage: `url(${rainyPicture})`
      }}
    ></div>
  )

  const imageClear = (
    <div
      className='bg'
      style={{
        backgroundImage: `url(${clearSkyPicture})`
      }}
    ></div>
  )

  const imageThunder = (
    <div
      className='bg'
      style={{
        backgroundImage: `url(${thunderPicture})`
      }}
    ></div>
  )

   const imageSnowy = (
    <div
      className='bg'
      style={{
        backgroundImage: `url(${snowyPicture})`
      }}
    ></div>
  )

  const imageFoggy = (
    <div
      className='bg'
      style={{
        backgroundImage: `url(${foggyPicture})`
      }}
    ></div>
  )


  function matchValues() {
  if(description) {
    const weatherDescription = description.split(' ')
    const cloudyData = ['cloud', 'clouds', 'cloudy', 'overcast']
    const rainyData = ['rain', 'rainy', 'drizzle']
    const clearData = ['clear']
    const thunderData = ['thunder', 'thunderstorm']
    const snowyData = ['snow', 'snowy']
    const foggyData = ['fog', 'haze', 'mist', 'smoke', 'sand', 'dust', 'ash', 'tornado', 'squalls']
    //weatherDescription = 'tornado'

    for (var i = 0; i < weatherDescription.length; i++) {
      if(cloudyData.includes(weatherDescription[i])) {
        return imageCloud
      } else if (rainyData.includes(weatherDescription[i])) {
        return imageRainy
      } else if (clearData.includes(weatherDescription[i])) {
        return imageClear
      } else if (thunderData.includes(weatherDescription[i])) {
        return imageThunder
      } else if (snowyData.includes(weatherDescription[i])) {
        return imageSnowy
      } else if (foggyData.includes(weatherDescription[i])) {
        return imageFoggy
      }
  }} 
  }

  function defaultWallpaper() {
    if(!description) {
      return imageClear
    }
  }

  return (
    <div className='data__container' style={{backgroundColor: 'transparent'}}>
      {!description && !error &&
      <p>Welcome to stormy</p> 
      }
      {city && country && (
        <p>
          {city}, {country}
        </p>
      )}
      {icon && (
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />
      )}
      {temperature && (
        <p className='temperature'>{Math.round(temperature - 273)}°</p>
      )}
      {description && <p>{description}</p>}
      {defaultWallpaper()}
      {description && matchValues()}
      {error && <p>{error}</p>}
      {wind && <p>wind speed:{' '}{wind}{' '}mph</p>}
    </div>
  )
}

export default Weather