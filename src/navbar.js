const page = window.location.href.toString().toLowerCase().split("#f");
const pageName = document.title;
var highlight = document.getElementById("highlight");
var navButtons = Array.from(document.getElementsByClassName("nav-button"));
var main = document.getElementById("mainH");
var small = document.getElementById("smallH");

highlight.classList.remove("animated");

if (page[1]) {
    navButtons.forEach(element => {
        if (page[1].replace("index", "home").includes(element.innerHTML.toLowerCase())) {
            var hW = element.getBoundingClientRect().width;
            main.setAttribute("points", `2,5 ${8 + hW},5 ${6 + hW},19 0,19`);
            small.setAttribute("points", `${4 + hW},5 ${8 + hW},5 ${6 + hW},19 ${2 + hW},19`);
            highlight.style.left = `${element.getBoundingClientRect().left - 5}px`;
            console.log(element.innerHTML);
        }
    });
}

history.pushState("", document.title, window.location.pathname + window.location.search);

setTimeout(function () {
    highlight.classList.add("animated");
    navButtons.forEach(element => {
        element.href = element.href + `#f${pageName.toUpperCase()}`;
        if (pageName.toLowerCase().includes(element.innerHTML.toLowerCase())) {
            var hW = element.getBoundingClientRect().width;
            main.setAttribute("points", `2,5 ${8 + hW},5 ${6 + hW},19 0,19`);
            small.setAttribute("points", `${4 + hW},5 ${8 + hW},5 ${6 + hW},19 ${2 + hW},19`);
            highlight.style.left = `${element.getBoundingClientRect().left - 5}px`;
            element.removeAttribute("href");
        }
        console.log(element.href);
    });
}, 1);