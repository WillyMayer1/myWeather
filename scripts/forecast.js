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

  const eachDayTitle = document.createElement('h2');
  const forecastInfo = document.createElement('div');

  eachDayTitle.textContent = 'Forecast to the next days';
  forecastInfo.className = 'forecast-info';

  idForecast.appendChild(eachDayTitle);

  data.forecast.forecastday.forEach((forecasts) => {

    console.log(forecasts);
    const img = document.createElement('img');
    const grades = document.createElement('div');
    const celsius = document.createElement('h2');
    const fahr = document.createElement('h4');
    const eachDay = document.createElement('section');

    img.src = forecasts.day.condition.icon;
    grades.className = 'grades';
    celsius.textContent = forecasts.day.avgtemp_c + ' ºC';
    fahr.textContent = forecasts.day.avgtemp_f + ' ºF';

    eachDay.appendChild(img);
    grades.appendChild(celsius);
    grades.appendChild(fahr);
    eachDay.appendChild(grades);
    forecastInfo.appendChild(eachDay);
    idForecast.appendChild(forecastInfo);
  });
}