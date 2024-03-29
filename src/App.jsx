import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";

const apiKey = import.meta.env.VITE_API_KEY;

const API_ROOT = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=5&aqi=no&alerts=no`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [userLocation, setUserLocation] = useState("96746");

  const api = `${API_ROOT}&q=${userLocation}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  const fetchWeather = () => {
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((d) => {
        console.log("Fetched weather data:", d);
        setData(d);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchWeatherAsync = async () => {
    setLoading(true);
    try {
      const res = await fetch(api);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeatherAsync();
  }, []);
  console.log(data);
  console.log(userLocation);

  return (
    <div>
      <h2>Weather Forecast</h2>
      <WeatherForm
        handleSubmit={handleSubmit}
        loading={loading}
        setLoading={setLoading}
        setUserLocation={setUserLocation}
        userLocation={userLocation}
      />
      {loading ? <div>Loading...</div> : <WeatherDisplay data={data} />}
    </div>
  );
};

export default App;
