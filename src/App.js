import { Button, Form } from 'react-bootstrap';
import './App.css';

function App() {

  https://api.openweathermap.org/data/2.5/weather?q=dakar&appid=74eb7cbd1622d2908381ad8c86881f0a


    return (
   <div className='container'>
      <header className="App-header">
          <div className="form-group  formInput">
            {/* <label for="">Localisation</label> */}
            <input 
              type="text"
              className="form-control" name="" id=""  placeholder="chercher localisation"/>
          </div>
      </header>

      <div className='localisation'>
          <div className='infolocal'>
              <p>36°C</p>
              <p>DAKAR</p>
          </div>
          <div className='image'>
              <img src=""  alt='image'/>
          </div>
      </div>
      <div className='meteo'>
          <div className='meteoItems'>
            <p>Temp</p>
            <img src='/img/celsius.png'/>
            <p>valeur</p>
          </div>
          <div className='separateur'></div>
          <div className='meteoItems'>
          <p>pression</p>
          <img src='/img/atmospherique.png'/>
            <p>valeur</p>
          </div>
          <div className='separateur'></div>
          <div className='meteoItems'>
            <p>Humidite</p>
            <img src='/img/vent.png'/>
            <p>valeur</p>
          </div>
          <div className='separateur'></div>
          <div className='meteoItems'>
            <p>vent</p>
            <img src='/img/vent.png'/>
            <p>valeur</p>
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
