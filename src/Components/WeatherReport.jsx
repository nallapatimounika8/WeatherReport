import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import WeatherCard from "./WeatherCard";
import { fetchData } from "../features/counter/counterSlice";

function WeatherReport() {

const dispatch = useDispatch()    

const [weatherInfo, setWeatherInfo] = useState([])

function fetchApi() {
    axios.get('http://api.weatherapi.com/v1/forecast.json?key=c3db1b206f9948f08e184558220912&q=London&days=1&aqi=no&alerts=no').then((response) => {
        console.log(response.data.forecast.forecastday[0].hour)
        setWeatherInfo(response.data.forecast.forecastday[0].hour)
        dispatch(fetchData(response.data.forecast.forecastday[0].hour))
    })
}

useEffect(() => {
    fetchApi()
},[])

  return (
    <div style={{ height: "100vh",width:'65vw', margin: "auto" }}>
      <div
        style={{
          height: "35vh",
          backgroundColor: "hsl(0, 0%, 90%)",
          borderRadius: "5px",
          fontSize: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontWeight: "normal" }}>Weather Forecast.</h1>
      </div>
      <div style={{marginTop:'30px',fontSize:'20px',color:'gray'}}>
      London
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0 30px",
          flexWrap:'wrap'
        }}
      >
        {weatherInfo.slice(4).map((cardInfo) => <><WeatherCard data={cardInfo}/></> )}
      </div>
    </div>
  );
}

export default WeatherReport;
