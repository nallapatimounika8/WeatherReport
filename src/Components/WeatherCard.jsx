import React from "react";

function WeatherCard(props) {
  return (
    <div
      style={{
        height: "40vh",
        width: "10vw",
        border: "1px solid gray",
        margin: "5px"
      }}
    >
        {/* <div style={{lineHeight:'20px'}}> */}
        <h1>{props.data.day}</h1>
        <p style={{color:'gray'}}>{props.data.time}</p>
        {/* </div> */}
        <img src={props.data.condition.icon} alt="" />
        <h1>{props.data.temp_f} &deg;F</h1>
        <p>{props.data.condition.text}</p>
    </div>
  );
}

export default WeatherCard;
