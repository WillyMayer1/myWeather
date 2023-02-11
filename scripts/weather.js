//API key 24a1aa44fb130edfe986a180a96be51a

let city;

document.querySelector('#cityBtn').onclick = function(){
    city = document.getElementById('city').value;
  const urlLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=24a1aa44fb130edfe986a180a96be51a`;

  async function getLocation() {
      try {
        const response = await fetch(urlLocation);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=24a1aa44fb130edfe986a180a96be51a`;
          
          async function getWeather() {
              const response = await fetch(urlWeather);
              const weather = await response.json();
              displayWeather(weather);
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

    function displayWeather(weather) {
      console.log(weather);

      const divWeather = document.querySelector('#weather');

      const imgWeather = document.querySelector('.imgWeather');
      const infoWeather = document.querySelector('.infoWeather');

      imgWeather.src = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`
      infoWeather.innerHTML = `${weather.main.temp} °C`;

      divWeather.appendChild(imgWeather);
      divWeather.appendChild(infoWeather);
    }
}