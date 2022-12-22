import './App.css';
import axios from 'axios';
import { useState } from 'react';
import moment from 'moment/moment';

function App() {
    const [data, setData] = useState({});
    const [location,setLocation ] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=74eb7cbd1622d2908381ad8c86881f0a`

    const searchLocation = ((event)=>{
        if(event.key === 'Enter'){
          axios.get(url).then((response)=>{
            setData(response.data)
          // let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(response.data.dt)
          // console.log(date);
          }) 
        }
      })
    
    return (
          <div className='container'>
            <header className="App-header">
                <div className="form-group  formInput">
                    <input 
                    value={location}
                    onChange={event=>setLocation(event.target.value)}
                    onKeyDown={searchLocation}
                    type="text"
                    className="form-control" name="" id=""  placeholder="chercher localisation"
                    />
                </div>
            </header>
            <div className='localisation'>
                <div className='infolocal'>
                   <p>{data.name}</p>
                   
                   {data.main ? <p>{new Date(data.dt * 1000).toDateString()}</p>:null}
                </div>
                <div  className='sun'>
                  <div className='sunset'>
                    {data.main ? <p>{ moment.utc(data.sys.sunrise,'X').add(data.timezone,'seconds').format('HH:mm a')}</p> : null}
                    <img src="/img/sunrise.png"  />
                  </div>
                  <div className='sunrise'>
                    {data.main ? <p>{ moment.utc(data.sys.sunset,'X').add(data.timezone,'seconds').format('HH:mm a')}</p> : null}
                    <img src="/img/sunset.png"  />
                  </div>
                </div>
            </div>
            <div className='meteo'>
              <div className='meteoItems'>
                <p>Temp</p>
                <img src='/img/celsius.png'/>
                {data.main ? <p>{(data.main.temp - 273.15).toFixed()}°C</p> : null}
              
              </div>
                <div className='meteoItems'>
                  <p>Pression</p>
                  <img src='/img/atmospherique.png'/>
                  {data.main ? <p>{data.main.pressure}PA</p> : null}
                </div>
                <div className='meteoItems'>
                  <p>Humidite</p>
                  <img src='/img/humidity.png'/>
                  {data.main ? <p>{data.main.humidity}%</p> : null}
                </div>
                <div className='meteoItems'>
                  <p>Vent</p>
                  <img src='/img/vent.png'/>
                  {data.main ? <p>{data.wind.speed}MPF</p> : null}
                </div>  
            </div>
        </div>
  );
}

export default App;
