//API key 24a1aa44fb130edfe986a180a96be51a

let city = "Mendoza";

const input = document.querySelector('input');
input.addEventListener('click', updateValue);

function updateValue(e) {
  city = e.target.value;
  console.log(city);
}
const urlLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=24a1aa44fb130edfe986a180a96be51a`;


async function getLocation() {
    try {
      const response = await fetch(urlLocation);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=24a1aa44fb130edfe986a180a96be51a`;
        
        async function getWeather() {
            const response = await fetch(urlWeather);
            const weather = await response.json();
            console.log(weather);
        }

        getWeather();


      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  getLocation();
