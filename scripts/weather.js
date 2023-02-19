//API key 9190bb933797474888f193203231902

//const idLoc = document.querySelector('.loc');
//let enterLoc = 'Mendoza';

const url = `http://api.weatherapi.com/v1/current.json?key=9190bb933797474888f193203231902&q=auto:ip`;
const idWeather = document.querySelector('#weather');

async function callWeather() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayWeather(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  callWeather();


function displayWeather(data) {
    //Prepare elements
    const city = document.createElement('h1');
    const img = document.createElement('img');
    const desc = document.createElement('h2');
    const grades = document.createElement('div');
    const celsius = document.createElement('h2');
    const fahr = document.createElement('h4');

    //content
    city.textContent = `Current location: ${data.location.name}`;
    img.src = data.current.condition.icon;
    img.className = 'img-weather';
    desc.textContent = data.current.condition.text;
    grades.className = 'grades';
    celsius.textContent = data.current.temp_c + ' ºC';
    fahr.textContent = data.current.temp_f + ' ºF';

    //displaying
    idWeather.appendChild(city);
    idWeather.appendChild(img);
    idWeather.appendChild(desc);
    idWeather.appendChild(grades);
    grades.appendChild(celsius);
    grades.appendChild(fahr);
}
