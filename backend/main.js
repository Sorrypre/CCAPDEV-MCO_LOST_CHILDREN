let nav_toggled = false;
let filter_toggled = false;

const side_nav = document.getElementById("in-side-nav");
const hamburger = document.getElementById("hamburger-btn");
const filter_btn = document.getElementById("filter-btn")
const filter_cls_btn = document.getElementById("filter-close-btn");
const filter_save_btn = document.getElementById("filter-save-btn");

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

function toggleFilter() {
    var filter_box = document.getElementById("filter-box");
    if (filter_toggled) {
        filter_box.classList.remove('flex');
        filter_box.classList.add('hidden');
    } else {
        filter_box.classList.remove('hidden');
        filter_box.classList.add('flex');
    }
    filter_toggled = !filter_toggled;
}

hamburger.addEventListener("click", toggleNav);
filter_btn.addEventListener("click", toggleFilter);
filter_cls_btn.addEventListener("click", toggleFilter);
filter_save_btn.addEventListener("click", toggleFilter);
