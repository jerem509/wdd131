const currentYear = document.getElementById("current-year");
const lastYearModified = document.querySelector("#last-modified");
const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;
lastYearModified.innerHTML = `Last modified on : <span id="ddate">${new Date(document.lastModified)}</span>`;

//Populate the list of options in select
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];
  
products.forEach(product => {
    const pdtOptions = document.querySelector('#products-list');
    const prod = document.createElement('option')    
    prod.setAttribute('value', product['name']);
    prod.textContent = product['name'];
    pdtOptions.appendChild(prod);
});


const visits = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("numOfVisits")) || 0;

if (numVisits !== 0) {
	visits.innerHTML = `Number of visits: ${numVisits}`;
} else {
	visits.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;
localStorage.setItem("numOfVisits", numVisits);