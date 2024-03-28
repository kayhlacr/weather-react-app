const WeatherForm = ({
  handleSubmit,
  setUserLocation,
  userLocation,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your location or Zip Code:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={userLocation}
        onChange={(e) => setUserLocation(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Get Weather"}
      </button>
    </form>
  );
};

export default WeatherForm;
