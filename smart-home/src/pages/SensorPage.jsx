import React from 'react';
import '../css/Sensor.css';
import temp from '../img/temp.png';
import humid from '../img/humid.png';
const SensorPage = () => {
    // Add your component logic here

    return (
        <div>
            <div
                class="container"
            >
                <div
                    class="row justify-content-center align-items-center g-2 mt-3"
                >
                        <div class="card m-3" style={{width: '15rem'}}>
                            
                            <div class="card-body">
                                <img src={temp} class="card-img-top device-icon m-2" alt="..."/>
                                <h5 class="card-title">Temperature</h5>
                                <p class="card-text">35 Degree Celcius</p>
                                
                            </div>
                        </div>
                        
                        <div class="card m-3" style={{width: '15rem'}}>
                            
                            <div class="card-body">
                                <img src={humid} class="card-img-top device-icon m-2" alt="..."/>
                                <h5 class="card-title">Humidity</h5>
                                <p class="card-text">39%</p>
                            </div>
                        </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default SensorPage;