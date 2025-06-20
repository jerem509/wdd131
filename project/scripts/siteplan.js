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

const sections = Array.from(document.querySelectorAll('.main-elt-container > section'));
sections.forEach(section => {
    let idx = sections.indexOf(section);
    if (idx % 2 === 0) {
        section.classList.add('even');
    }
    else
    {
        section.classList.add('odd');
    }
});

const homeBtn = document.querySelector('#home-button');
homeBtn.addEventListener('click', () => window.location.href = 'contact.html');

//=================NUMBER OF SUBMISSION==================================
// const submitBtn = document.querySelector("#form-post-btn");
// const confirmation = document.querySelector("#confirmation");
// let numVisits = Number(window.localStorage.getItem("numOfVisits")) || 0;

// submitBtn.addEventListener('click', (confirmation) => {
//     if (numVisits === 0) {
//         numVisits++;
//         confirmation.textContent = `First message submitted 🥳.`;
//     }
//     else {
//         numVisits++;
//         confirmation.textContent = `Thank you for your message 🥳.`;
//     }
// })

// localStorage.setItem("numOfVisits", numVisits);
