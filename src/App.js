import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({});
  const [location,setLocation ] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=74eb7cbd1622d2908381ad8c86881f0a`

    const searchLocation = ((event)=>{
      if(event.key === 'Enter'){

        axios.get(url).then((response)=>{
          setData(response.data)
          console.log(response.data.main)
        })
      }
    })

    return (
   <div className='container'>
      <header className="App-header">
          <div className="form-group  formInput">
            {/* <label for="">Localisation</label> */}
            <input 
            value={location}
              onChange={event=>setLocation(event.target.value)}
              onKeyDown={searchLocation}
              type="text"
              className="form-control" name="" id=""  placeholder="chercher localisation"/>
          </div>
      </header>

      <div className='localisation'>
          <div className='infolocal'>
          {data.main ? <p>{data.main.temp.toFixed()}°F</p> : null}
              <p>{data.name}</p>
          </div>
          <div className='image'>
              <img src="/img/weather-forecast.png"  alt='image'/>
          </div>
      </div>
      <div className='meteo'>
          <div className='meteoItems'>
            <p>Temp</p>
            <img src='/img/celsius.png'/>
            {data.main ? <p>{data.main.temp.toFixed()}°F</p> : null}
          </div>
          <div className='separateur'></div>
          <div className='meteoItems'>
          <p>pression</p>
          <img src='/img/atmospherique.png'/>
          {data.main ? <p>{data.main.pressure}PA</p> : null}
          </div>
          <div className='separateur'></div>
          <div className='meteoItems'>
            <p>Humidite</p>
            <img src='/img/humidity.png'/>
            {data.main ? <p>{data.main.humidity}%</p> : null}
          </div>
          <div className='separateur'></div>
          <div className='meteoItems'>
            <p>vent</p>
            <img src='/img/vent.png'/>
            {data.main ? <p>{data.wind.speed}MPF</p> : null}
          </div>
          {/* <div className='separateur'></div>
          <div className='meteoItems'>
          <p>vent</p>
          <i>icon</i>
            <p>valeur</p>
          </div> */}
         
         
      </div>
   </div>
  );
}

export default App;
