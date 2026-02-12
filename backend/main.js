let nav_toggled = false;

const side_nav = document.getElementById("in-side-nav");

function toggleNav() {
    if (nav_toggled) {
        side_nav.style.width = "0px";
        side_nav.style.padding = "0px";
    } else {
        side_nav.style.width = "300px";
        side_nav.style.padding = "20px";
    }
    nav_toggled = !nav_toggled;
}

