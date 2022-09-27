import { WeatherData } from "../interfaces/WeatherData"


const DetailsTable = ({data: {humidity, feels_like, visibility, pressure, latitude, longitude, windSpeed }}: {data: WeatherData}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>
                    Humedad: 
                </th>
                <td id="humidity">{humidity}</td>
            </tr>
            <tr>
                <th>Grados:</th>
                <td id="feels">{feels_like}</td>
            </tr>
            <tr>
                <th>Visibilidad:</th>
                <td id="visibility">{visibility}</td>
            </tr>
            <tr>
                <th>Presion:</th>
                <td id="pressure">{pressure}</td>
            </tr>
            <tr>
                <th>Longutud:</th>
                <td id="longitude">{longitude}</td>
            </tr>
            <tr>
                <th>Latitud:</th>
                <td id="latitude">{latitude}</td>
            </tr>
            <tr>
                <th>Velocidad del viento:</th>
                <td id="windSpeed">{windSpeed}</td>
            </tr>
        </tbody>

        
    </table>
  )
}

export default DetailsTable