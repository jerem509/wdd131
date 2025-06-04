const currentYear = document.getElementById("current-year");
const lastYearModified = document.querySelector("#last-modified");
const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;
lastYearModified.innerHTML = `Last modified on : <span id="ddate">${new Date(document.lastModified)}</span>`;