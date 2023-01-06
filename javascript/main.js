const mediaQuery = window.matchMedia("(min-width: 1000px)");
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const openHelpVideoLink = document.querySelector("#open-help-video-link");
const closeHelpVideoButton = document.querySelector("#close-help-video-button");
const helpVideoContainer = document.querySelector("#help-video-container");
const videoOverlay = document.querySelector("#video-overlay");
const contactMeCheckbox = document.querySelector("#contact #contact-me");
const emailContactRadioButton = document.querySelector("#contact #email-contact");
const phoneContactRadioButton = document.querySelector("#contact #phone-contact");
// const requiredInputs = document.querySelectorAll("#contact [required]");
const submitButton = document.querySelector("#contact #submit");

/**
 * Imports external menu and footer HTML into a page
 */
$(document).ready(function(){
    $( "#menu" ).load( "menu.html" );
    $( "footer" ).load( "footer.html" );
 });

/**
 * Handles the WindowLoad event.
 */
window.addEventListener("load", function() {
    handleScreenSizeChange(mediaQuery);
}, {once: true});

window.addEventListener("input", function(e) {
    if (e.target.classList.remove("no-value"));
});

/**
 * Adds a listener to monitor screen size changes.
 * NOTE: mediaQuery.addListener has been depreciated and should be
 * replaced with mediaQuery.addEventListener however the latter currently
 * doesn't work in Chrome.
 *
 */
mediaQuery.addListener(handleScreenSizeChange);

/**
 * Handles the document click event.
 */
document.addEventListener("click", function(e)  {
    if (e.target.id === "menu" || e.target === menuButton ) {
        return;
    }
    closeMenu();
});

/**
 * Handles the menuButton click event.
 */
menuButton.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
        closeMenu();
    } else {
        openMenu();
    }
});

/**
 * Handles the openHelpVideoLink click event.
 */
openHelpVideoLink.addEventListener("click", function(e) {
    showVideoContainer(helpVideoContainer);
});

/**
 * Handles the openHelpVideoLink mouseover event.
 */
openHelpVideoLink.addEventListener("mouseover", function(e) {
    showVideoContainer(helpVideoContainer);
});

/**
 * Handles the closeHelpVideoButton click event.
 */
closeHelpVideoButton.addEventListener("click", function(e) {
    closeVideoContainer(helpVideoContainer);
});

/**
 * Handles the click event for the contactMeCheckbox
 */
contactMeCheckbox.addEventListener("click", function(e) {
    emailContactRadioButton.disabled = !contactMeCheckbox.checked;
    phoneContactRadioButton.disabled = !contactMeCheckbox.checked;
});

submitButton.addEventListener("click", function(e) {
    var requiredInputs = document.querySelectorAll("#contact [required]");
    requiredInputs.forEach((el) => {
        if (el.value === '') {
            el.classList.add("no-value");
        }
    });
});

requiredInputs.addEventListener("click", function(e) {
    // if
});

/**
 * Adds/remove aria-disabled attribute based on viewport size.
 * @param {document#event:screenSizeChange} e
 */
function handleScreenSizeChange(e) {
    if (e.matches) {
        menuButton.setAttribute("aria-disabled", true);
        closeMenu();
        return;
    }
        menuButton.setAttribute("aria-disabled", false);
}

/**
 * Adds a class to a navigation menu container indicating it should be opened.
 */
function openMenu() {
    menuButton.setAttribute("aria-expanded", true);
    menu.classList.add("show");
}

/**
 * Removes a class from a navigation menu container indicating it should be closed.
 */
function closeMenu() {
    menuButton.setAttribute("aria-expanded", false);
    menu.classList.remove("show");
}

/**
 * Adds a class to a video container indicating it should be opened.
 * @param {string} videoContainer - The video container to open.
 */
function showVideoContainer(videoContainer) {
    videoContainer.classList.add("show");
    videoOverlay.classList.add("show");
}

/**
 * Removes a class from a video container indicating it should be closed.
 * @param {string} videoContainer - The video container to close.
 */
function closeVideoContainer(videoContainer) {
    videoContainer.classList.remove("show");
    videoOverlay.classList.remove("show");
}
