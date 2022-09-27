
import { useEffect, useState, FormEvent } from 'react';
import './App.css'
import WeatherContainer from './components/WeatherContainer'
import { getWeatherByCoords, getWeatherBySearch } from './api/fetchWeather';
import Search from './components/Search';

function App() {

  const [fetchData, setFetchData] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position)=>{
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;

      try {
        const data = await getWeatherByCoords(LAT, LON);
        setFetchData(data)
        
      } catch (error) {
        setError("Por favor revise su conexión a internet")
        
      }
    })
    
  }, [])

  //Buscador
  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string)=>{
    e.preventDefault();
    setError("")

    try {
      const dataCiudad = await getWeatherBySearch (CITY);
      if(dataCiudad === "404"){
        setError("No se encontro la ciudad")
      }else if (dataCiudad === "400"){
        setError("Debe escribir una ciudad")

      }else{
        setFetchData(dataCiudad)
        console.log(dataCiudad);
      }
      
    } catch (error) {
      setError("Por favor revise su conexion a internet")
    }
  }
  

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Search handleSearch={handleSearch} />
      <WeatherContainer fetchData={fetchData} error={error} />
    </div>
  )
}

export default App
