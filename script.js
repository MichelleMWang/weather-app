/*const location = document.getElementById("location"); 
const temp = document.getElementById("temperature"); 
const tempDesc = document.getElementById("temp-description"); 
const high = document.getElementById("high"); 
const low = document.getElementById("low"); 
*/ 
const header = document.getElementById('header'); 

function getLocation(){
    navigator.geolocation.getCurrentPosition(getWeather, locationError);
    if (!navigator.geolocation) {
        header.textContent = "Geolocation is not supported by this browser.";
    } else {
        header.textContent = "Loading..."; 
    }
}

function showPosition(position) {
    header.textContent = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
async function getWeather(position){
    const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=c32bb3f15ac6f3b9f9a8d51f0a78543e`)
    //const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=33.64&lon=-117.83&appid=c32bb3f15ac6f3b9f9a8d51f0a78543e`); 
    const JSONED = await info.json(); 
    header.textContent = ''; //clearing the "loading..." 
    headerDOM(JSONED.name, JSONED.main.temp, JSONED.weather[0].description, JSONED.main.temp_min, JSONED.main.temp_max); 
}

function locationError(){
    console.log('There was an error getting the location'); 
}

function headerDOM(location, temp, desc, high, low){
    const loc = document.createElement('div'); 
    loc.textContent = location;
    header.appendChild(loc); 

    const temperature = document.createElement('div'); 
    temperature.textContent = temp;
    header.appendChild(temperature); 

    const description = document.createElement('div'); 
    description.textContent = desc;
    header.appendChild(description); 

    const highlow = document.createElement('div'); 
    const lowed = document.createElement('span'); 
    lowed.textContent = "L: " + low + " ";
    highlow.appendChild(lowed); 
    const highed = document.createElement('span'); 
    highed.textContent = "H: " + high;
    highlow.appendChild(highed); 
    header.appendChild(highlow); 

}

getLocation(); 