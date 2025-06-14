const menu = document.querySelector('#menuBtn');
const navbar = document.querySelector('#navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('open');
    menu.classList.toggle('open');
}
);
//CLOSE THE MENU AFTER CLICKING ON A MENU ITEM

const menuItems = document.querySelectorAll('.navMenuItem');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navbar.classList.toggle('open');
        menu.classList.toggle('open');
    });
});

//INSERT DATE IN THE FOOTER
const currentYear = document.getElementById("current-year");
const lastYearModified = document.querySelector("#last-modified");
const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;
lastYearModified.innerHTML = `Last modified on : <span id="ddate">${new Date(document.lastModified)}</span>`;