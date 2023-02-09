import React, { useEffect, useState } from "react";
import "./Main.css";

export default function Main() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [sys, setSys] = useState("");
  const [search, setSearch] = useState("Delhi");
  const api_key = "c51704719f6e98cdd1abf98a4e40e6f6";

  useEffect(
    (event) => {
      const fetchApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${api_key}
      `;
        const response = await fetch(url);
        const resJson = await response.json();
        setCity(resJson.main);
        setWeather(resJson.weather);
        setSys(resJson.sys);
      };
      fetchApi();
    },
    [search]
  );

  return (
    <>
      <div className="app-wrap">
        <header>
          <input
            type="text"
            value={search}
            className="search-box"
            placeholder="Enter your city"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button className="btn">Search</button>
        </header>
        {!city ? (
          <p>No data found</p>
        ) : (
          <main>
            <section className="location">
              <div className="city">
                <i className="fa-solid fa-location-dot"></i>
                {search}, {sys.country}
              </div>
            </section>
            <div className="current">
              <div className="temp">
                {city.temp}
                <span>°c</span>
              </div>
              <div class="weather">{weather[0].description}</div>
              <div className="hi-low">
                Min : {city.temp_min}°c / Max : {city.temp_max} °c
              </div>
              <div className="hi-low">Humidity : {city.humidity}</div>
            </div>
          </main>
        )}
      </div>
    </>
  );
}
