const WeatherDisplay = ({ data }) => {
  if (!data?.forecast?.forecastday) {
    return <div>No forecast data available.</div>;
  }

  return (
    <div className="weather-display">
      {data.forecast.forecastday.map((day, index) => (
        <div className="weather-display-day" key={index}>
          <h2>
            <span className="date">{day.date}</span> Max {day.day.maxtemp_f}°F,
            Min {day.day.mintemp_f}°F
          </h2>
        </div>
      ))}
    </div>
  );
};

export default WeatherDisplay;
