import React, { useState, useEffect } from 'react';
import '../css/Sensor.css';
import temp from '../img/temp.png';
import humid from '../img/humid.png';
import light from '../img/light.png';
import { getTemperature, getHumidity, getLight } from '../api/userApi';
const SensorPage = () => {
  const [Temperature, setTemperature] = useState('');
  const [Humidity, setHumidity] = useState('');
  const [Light, setLight] = useState('');

  const fetchTemperature = async () => {
    try {
      const data = await getTemperature();
      setTemperature(data);
    } catch (error) {
      console.error("Failed to fetch temperature data: ", error);
    }
  };

  const fetchHumidity = async () => {
    try {
      const data = await getHumidity();
      setHumidity(data);
    } catch (error) {
      console.error("Failed to fetch humidity data: ", error);
    }
  };

  const fetchLight = async () => {
    try {
      const data = await getLight();
      setLight(data);
    } catch (error) {
      console.error("Failed to fetch light data: ", error);
    }
  };

  useEffect(() => {
    const temperatureIntervalId = setInterval(fetchTemperature, 3000);
    const humidityIntervalId = setInterval(fetchHumidity, 3000);
    const lightIntervalId = setInterval(fetchLight, 3000);

    return () => {
      clearInterval(temperatureIntervalId);
      clearInterval(humidityIntervalId);
      clearInterval(lightIntervalId);
    };
  }, []);

  return (
    <div>
      <div class="container">
        <div class="row justify-content-center align-items-center g-2 mt-3">
          <div class="card m-3" style={{width: '15rem'}}>
            <div class="card-body">
              <img src={temp} class="card-img-top device-icon m-2" alt="..."/>
              <h5 class="card-title">Temperature</h5>
              <p class="card-text">{Temperature.value} Degree Celcius</p>
            </div>
          </div>
          <div class="card m-3" style={{width: '15rem'}}>
            <div class="card-body">
              <img src={humid} class="card-img-top device-icon m-2" alt="..."/>
              <h5 class="card-title">Humidity</h5>
              <p class="card-text">{Humidity.value}%</p>
            </div>
          </div>
          <div class="card m-3" style={{width: '15rem'}}>
            <div class="card-body">
              <img src={light} class="card-img-top device-icon m-2" alt="..."/>
              <h5 class="card-title">Light</h5>
              <p class="card-text">{Light.value}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorPage;