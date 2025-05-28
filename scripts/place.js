const currentYear = document.getElementById("current-year");
const lastYearModified = document.querySelector("#last-modified");
const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;

lastYearModified.innerHTML = `Last modified on : <span id="ddate">${new Date(document.lastModified)}</span>`;

//Add degree celcius symbol after temperature number in table data
//Ambiant temperature
const temperature = document.querySelector('.temp-amb');
const raw = temperature.textContent.trim();
const temperatureTd = `${raw} °C`;
temperature.textContent = temperatureTd;

//Wind Chill
const windSpeed = document.querySelector('#wind-speed');
const ws = Number(windSpeed.textContent.trim());
if (ws >= 0) {
    windSpeed.textContent = `${ws} km/h`;
}

/*===================================================
Wind chill formula:
-----------------------------------------------------
Twc = 13.12 + 0.6215*t - 11.37v^0.16 + 0.3965*t*v^0.16
=====================================================*/
//Convert wind speed (ws) and ambiant temperature (t) text content to numbers
console.log(ws);
//const cleaned = raw.replace(/[^\d.-]/g, '');
const t = Number(raw);
console.log(t);
//calculate the wind chill(Twc)
const windChill = 13.12+0.6215*t-11.37*Math.pow(ws,0.16)+0.3965*t*Math.pow(ws, 0.16);
console.log(typeof(windChill))
//console.log(windChill);
if (raw <= 10 && ws > 4.8) {
    //display the wind chill result in the webpage
    document.querySelector('.chill-temp').textContent = `${windChill.toFixed(2)} °C`;
}
else { document.querySelector('.chill-temp').textContent = `N/A` };

