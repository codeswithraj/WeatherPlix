import React, { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");
  const api_key = "c51704719f6e98cdd1abf98a4e40e6f6";

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${api_key}
      `;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="app-wrap">
        <header>
          <input
            type="text"
            value={search}
            className="search-box"
            placeholder="Search for a city..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button className="btn">Search</button>
        </header>
        {!city ? (
          <p>No Data Found </p>
        ) : (
          <main>
            <section className="location">
              <div className="city">
                <i className="fa-solid fa-location-dot"></i>
                {city}, {city.sys.country}
              </div>
              <div className="date">Sunday 1 January 2023</div>
            </section>
            <div className="current">
              <div className="temp">
                {city.temp} <span>°c</span>
              </div>
              <div className="weather">Sunny</div>
              <div className="hi-low">
                Min : {city.temp_min}°c / Max : {city.temp_max} °c
              </div>
            </div>
          </main>
        )}
      </div>
    </>
  );
};
