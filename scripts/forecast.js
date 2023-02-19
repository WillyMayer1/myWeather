//API key 9190bb933797474888f193203231902

const urlForecast = 'http://api.weatherapi.com/v1/forecast.json?key=9190bb933797474888f193203231902&q=auto:ip';
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

}