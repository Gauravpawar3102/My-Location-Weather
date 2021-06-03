window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    '.temperature-description'
  );
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimeZone = document.querySelector('.location-timezone');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const ApiKey = '061902078326dce8e64d97f1c5857b83';

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${ApiKey}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { main, weather } = data;

          // set Dom elements from the api
          let temperature = Math.floor(main.temp - 273);

          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = weather[0].description;
          locationTimeZone.textContent = data.name;
        });
    });
  }
});
