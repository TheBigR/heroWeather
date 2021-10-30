import React, { useState } from 'react'
import LocationItem from './LocationItem'
import * as accuWeather from '../consts/accuWeather'

const TlvWeather = () => {
  const [tlv] = useState({
    name: 'Tel Aviv',
    key: accuWeather.tlvLocationKey,
  })

  return <LocationItem location={tlv} />
}

export default TlvWeather
