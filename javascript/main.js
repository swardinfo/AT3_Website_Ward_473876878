const mediaQuery = window.matchMedia("(min-width: 1000px)");
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

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
    if (menu.classList.contains("menu-open")) {
        closeMenu();
    } else {
        openMenu();
    }
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
 * Opens the navigation menu.
 */
function openMenu() {
    menuButton.setAttribute("aria-expanded", true);
    menu.classList.add("menu-open");
}

/**
 * Closes the navigation menu.
 */
function closeMenu() {
    menuButton.setAttribute("aria-expanded", false);
    menu.classList.remove("menu-open");
}

