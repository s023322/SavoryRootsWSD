const page = window.location.href.toString().toLowerCase().split("#f");
history.pushState("", document.title, window.location.pathname + window.location.search);
const pageName = document.title;
var highlight = document.getElementById("highlight");
var navButtons = Array.from(document.getElementsByClassName("nav-button"));
var main = document.getElementById("mainH");
var small = document.getElementById("smallH");
var currentPage = "";

highlight.classList.remove("animated");

if (page[1]) {
    main.setAttribute("points", `0,0 0,0 0,0 0,0`);
    small.setAttribute("points", `0,0 ,0,0 0,0 0,0`);
    navButtons.forEach(element => {
        if (page[1].replace("index", "home").replace("documentation", "reference page").includes(element.innerHTML.toLowerCase())) {
            var hW = element.getBoundingClientRect().width;
            main.setAttribute("points", `2,5 ${8 + hW},5 ${6 + hW},19 0,19`);
            small.setAttribute("points", `${4 + hW},5 ${8 + hW},5 ${6 + hW},19 ${2 + hW},19`);
            highlight.style.left = `${element.getBoundingClientRect().left - 5}px`;
            console.log(element.innerHTML);
        }
    });
}

document.getElementById("body").style.removeProperty("opacity");

setTimeout(function () {
    highlight.classList.add("animated");
    main.setAttribute("points", `0,0 0,0 0,0 0,0`);
    small.setAttribute("points", `0,0 ,0,0 0,0 0,0`);
    navButtons.forEach(element => {
        element.href = element.href + `#f${pageName.toUpperCase()}`;
        if (pageName.toLowerCase().includes(element.innerHTML.toLowerCase())) {
            var hW = element.getBoundingClientRect().width;
            main.setAttribute("points", `2,5 ${8 + hW},5 ${6 + hW},19 0,19`);
            small.setAttribute("points", `${4 + hW},5 ${8 + hW},5 ${6 + hW},19 ${2 + hW},19`);
            highlight.style.left = `${element.getBoundingClientRect().left - 6}px`;
            element.removeAttribute("href");
            currentPage = pageName;
        }
    });
}, 1);

console.log(currentPage)

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 2) {
        if (pageName.toLowerCase().includes("documentation")) {
            main.style.opacity = "0";
            small.style.opacity = "0";
        }
    }
    else {
        main.style.opacity = "0.5";
        small.style.opacity = "0.5";
    }
})