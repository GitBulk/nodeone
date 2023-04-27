import { useFetch } from "hooks/useFetch"
import { useRef, useState } from "react"
import { Card, Icon } from "semantic-ui-react"

export default function Weather() {
  const [city, setCity] = useState('')
  const [fetchingWeather, setFetchingWeather] = useState(false)
  const cityRef = useRef()

  function handleOnSubmit(e) {
    e.preventDefault()
    setCity(cityRef.current.value)
    cityRef.current.focus()
    setFetchingWeather(true)
  }

  return (
    <div className='center-container'>
      <form onSubmit={handleOnSubmit} className='city' >
        <input type='text' ref={cityRef} />
        <button>Search</button>
      </form>
      <div className='result'>
        {fetchingWeather && <div><WeatherInfo city={city}/></div>}
      </div>
    </div>
  )
}

function WeatherInfo({ city }) {
  const apiUrl = `${process.env.REACT_APP_OPEN_WEATHER_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  const { data, loading, error } = useFetch(apiUrl, true)
  if (error) {
    console.log('error', error)
    return <div>{error.message}</div>
  }

  if (loading || !data) {
    return <div>Loading ...</div>
  }

  const weatherData = data.weather[0]
  const weatherIconUrl = `${process.env.REACT_APP_OPEN_WEATHER_ICON_URL}/${weatherData.icon}.png`

  return (
    <Card>
      <Card.Content>
        <Card.Header>{data.name}</Card.Header>
        <Card.Meta>{weatherData.description}</Card.Meta>
        <Card.Description>
          <Icon name='thermometer' />
          {data.main.temp}°C
        </Card.Description>
        <Card.Description>
          <Icon name='sun' />
          {new Date(data.sys.sunrise * 1000).toLocaleTimeString()} / {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <img src={weatherIconUrl} alt={weatherData.description} />
      </Card.Content>
    </Card>
  )
}