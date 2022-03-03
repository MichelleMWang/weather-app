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
    //const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=33.6481344&lon=-117.8194082&appid=c32bb3f15ac6f3b9f9a8d51f0a78543e`)
    console.log(info); 
}

function locationError(){
    console.log('There was an error getting the location'); 
}

getLocation(); 