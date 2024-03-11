
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItems = document.getElementById('current-weather-items');
const  timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weaterForcastEl = document.getElementById('weather-forcast'); 
const currentTempEl = document.getElementById('current-temp');

setInterval(() => {
    const time = new Date();
    const months = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12Hrformat = hour >= 13 ? hour%12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    time.innerHTML = hoursIn12Hrformat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`;

}, 1000);