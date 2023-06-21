function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
  
    const API_KEY = '1712dfcf069625fcc1417f35b6021942'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`

    axios.get(url)
      .then(response => {
        const weatherInfo = document.getElementById('weatherInfo');
        const data = response.data;

        const weather = {
          city: data.name,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
        };
        weatherInfo.innerHTML = `
          <div class="fs-3 fw-bold fst-italic">
            <h2 class="fw-bolder" style="font-size:40px">${weather.city}</h2>
            <p>Temperature: ${weather.temperature}°C</p>
            <p>Humidity: ${weather.humidity}</p>
            <p>Description: ${weather.description}</p>
          </div>
        `;
      })
      .catch(error => {
        console.log(error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '<p>Error retrieving weather data.</p>';
      });
  }
  