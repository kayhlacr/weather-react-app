const WeatherDisplay = ({ data }) => {
  if (!data?.forecast?.forecastday) {
    return <div>No forecast data available.</div>;
  }

  return (
    <div>
      {data.forecast.forecastday.map((day, index) => (
        <div key={index}>
          <h2>
            {day.date}: Max {day.day.maxtemp_f}°F, Min {day.day.mintemp_f}°F
          </h2>
        </div>
      ))}
    </div>
  );
};

export default WeatherDisplay;
