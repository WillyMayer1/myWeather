//API key 9190bb933797474888f193203231902

const urlForecast = 'http://api.weatherapi.com/v1/forecast.json?key=9190bb933797474888f193203231902&q=auto:ip&days=3';
const idForecast = document.querySelector('#forecast');

async function callForecast() {
    try {
      const response = await fetch(urlForecast);
      if (response.ok) {
        const data = await response.json();
        displayForecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  callForecast();


function displayForecast(data) {
  console.log(data.forecast);
  data.forecastday.forEach((forecasts) => {

    console.log(forecasts);
    const img = document.createElement('img');
    const celsius = document.createElement('h2');
    const fahr = document.createElement('h4');

    img.src = forecasts.day.condition.icon;
    celsius.textContent = data.day.avgtemp_c + ' ºC';
    fahr.textContent = data.day.avgtemp_f + ' ºF';

    idWeather.appendChild(img);
    grades.appendChild(celsius);
    grades.appendChild(fahr);
  })
}