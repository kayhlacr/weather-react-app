const WeatherDisplay = ({ forecast }) => {
  return (
    <div>
      {forecast.map((day, index) => (
        <div key={index}>
          <h2>
            {day.date}: Max {day.maxtemp_f}°F, Min {day.mintemp_f}°F
          </h2>
        </div>
      ))}
    </div>
  );
};

export default WeatherDisplay;
