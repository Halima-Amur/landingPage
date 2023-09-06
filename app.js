/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.getElementById("navbar__list");
const navBar = document.querySelector('navbar__list'); 
const sections = Array.from(document.querySelectorAll("section"));

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListItem() {
    
    for (sec of sections) {
        listItem = document.createElement("li");
        listItem.innerHTML = `<li><a herf="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`; 
       navList.appendChild(listItem); 
    }
}
createListItem();
window.onscroll = function () {
    document.querySelectorAll("section").forEach(function(active){
        if (
            active.getBoundingClientRect().top >= -400 && 
            active.getBoundingClientRect().top <= 150 
        ) {
            active.classList.add("your-active-class");

        } else { 
            active.classList.remove("your-active-class");
        }
    });
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
 

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event

navList.addEventListener("click", (tosec) => {
    tosec.preventDefault();
    if (tosec.target.dataset.nav) {
        document
        .getElementById(`${tosec.target.dataset.nav}`)
        .scrollIntoView({ behavior: "smooth"});
setTimeout(() => {
    location.hash = `${tosec.target.dataset.nav}`;
}, 140); 
    }

});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
function activeSection () {
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=> {
        const sectionBond = section.getBoundingClientRect();
        if (sectionBond.top <= 400 && sectionBond.bottom >= 380) {
            section.classList.add("your-active-class");
            navActive[i].classList.add("active_button");
        } else {
            section.classList.remove("your-active-class")
            navActive[i].classList.remove("active_button");
        }
    })
}
function toggleNavBar(){
    let userScroll; 
    header.style.cssText = 'opacity:1; transition: ease 0.5s;'
    window.clearTimeout(userScroll);
    userScroll = setTimeout(function(){
        header.style.cssText = 'opacity: 0; transition: ease 0.5s;'
    }, 6500);
}


window.addEventListener('scroll', (event)=>{
    activeSection();
    toggleNavBar();
}) 
// Set sections as active

// Get the navbar element


