const menu = document.querySelector('#menu');
const navbar = document.querySelector('#navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('open');
    menu.classList.toggle('open');
}
)

//after a click on the item menu, the title of the active page is displayed above the album.
//Home is the welcome page title
const listItems = document.querySelectorAll('li');
let currentPage = document.querySelector('#current-page');
listItems.forEach(item => {
    item.addEventListener('click', () => {
        const textClickedOn = item.querySelector('a').textContent;
        // console.log(textClickedOn);
        currentPage.innerText = textClickedOn;
        // item.querySelector('a').classList.add('active');
        navbar.classList.toggle('open');
        menu.classList.toggle('open');

        let newList = [];
        //Page to load depending on the menu item clicked on
        if (textClickedOn === "Old") {
            newList = showOldTemples(temples);
        }
        else if (textClickedOn === "New") {
            newList = showNewTemples(temples);
        }
        else if (textClickedOn === "Small") { 
            newList = showSmallTemples(temples);
        }
        else if (textClickedOn === "Large") {
            newList = showLargeTemples(temples);
        }
        else {
            newList = temples;
        }
        renderTemples(newList);
    });
});

//Display the current year in the footer
const currentYear = document.getElementById("current-year");
const lastYearModified = document.querySelector("#last-modified");
const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;
lastYearModified.innerHTML = `Last modified on : <span id="ddate">${new Date(document.lastModified)}</span>`;


//==================================================================================================
//Array of temples
//==================================================================================================
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
      templeName: "Port-au-Prince Haiti",
      location: "Port-au-Prince, Haiti",
      dedicated: "2019, September, 1",
      area: 10396,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/port-au-prince-haiti/400x250/02-Port-au-Prince-Haiti-Temple-2264533.jpg"
    },
    {
        templeName: "Porto Alegre Brazil",
        location: "Porto Alegre, Brazil",
        dedicated: "2000, December, 17",
        area: 13325,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/porto-alegre-brazil/400x250/porto-alegre-brazil-temple-lds-83426-high-res-print.jpg"
    },
    {
        templeName: "Brigham City Utah",
        location: "Brigham City Utah, USA",
        dedicated: "2000, December, 17",
        area: 36000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brigham-city-utah/400x250/brigham-city-temple-lds-1027480-wallpaper.jpg"
    }
    
];
  
//=============================================================================
// Create album
//=============================================================================
function buildCard(elt) {
    return `<div class="card">
    <h3>${elt.templeName}</h3>
    <p><span class="data-heading">Location:</span> ${elt.location}</p>
    <p> <span class="data-heading">Dedicated:</span> ${elt.dedicated}</p>
    <p id="area"> <span class="data-heading">Area:</span> ${elt.area} sq ft</p>
    <div><img loading="lazy" class=templePic src="${elt.imageUrl}" alt="${elt.templeName} temple picture."></div>
    </div>`
}
function renderTemples(templesList) {
    const picturesArr = templesList.map(buildCard);
    document.querySelector('#album').innerHTML = picturesArr.join("");
}
renderTemples(temples);


//==========================================
//Functions to filter temples
// =========================================
//Show temples by size
function showSmallTemples(templesList) {
    return templesList.filter(temple => temple.area < 10000);
};

function showLargeTemples(templesList) {
    return templesList.filter(temple => temple.area > 90000);
};
//Show temples by age
function showOldTemples(templesList) {
    return templesList.filter(temple => {
        const dDate = temple.dedicated;
        const age = parseInt(dDate.split(", ")[0].trim());
        return age < 1900;
    });
};

function showNewTemples(templesList) {
    return templesList.filter(temple => {
        const dDate = temple.dedicated;
        const age = parseInt(dDate.split(", ")[0].trim());
        return age > 2000;
    });
};