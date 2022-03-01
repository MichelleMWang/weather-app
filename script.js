/*const location = document.getElementById("location"); 
const temp = document.getElementById("temperature"); 
const tempDesc = document.getElementById("temp-description"); 
const high = document.getElementById("high"); 
const low = document.getElementById("low"); 
*/ 
const header = document.getElementById('header'); 

function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, locationError);
      } else {
        header.textContent = "Geolocation is not supported by this browser.";
      }
}

function showPosition(position) {
    header.textContent = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }

function locationError(){
    console.log('There was an error getting the location'); 
}

getLocation(); 