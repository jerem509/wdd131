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
    });
});

//make the menu button disappear beyond a size of 430px
const menuButton = document.querySelector('#menu');
window.addEventListener('resize', () => {
    if ((window.innerWidth >= 431) && menuButton) {menuButton.remove();}
});

//Display the current year in the footer
const currentYear = document.getElementById("current-year");
const lastYearModified = document.querySelector("#last-modified");
const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;
lastYearModified.innerHTML = `Last modified on : <span id="ddate">${new Date(document.lastModified)}</span>`;