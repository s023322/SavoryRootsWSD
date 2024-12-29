window.onload = function () {
    animateIn();

    document.getElementById("mainText").style.marginTop = "3rem";
    document.getElementById("mainText").style.left = "0px";

    document.getElementById("slogan").style.width = "100%";
    document.getElementById("slogan").style.position = "relative";
    document.getElementById("slogan").style.left = "0px";
    document.getElementById("slogan").style.bottom = "-8px";
    document.getElementById("slogan").style.textAlign = "center";
    document.getElementById("slogan").style.lineHeight = "14px";

    document.getElementById("decoration").style.width = "10rem";
    document.getElementById("decoration").style.height = "158px";

    document.getElementById("order").style.height = "6rem";
    document.getElementById("order").style.paddingTop = "1.75rem";
    document.getElementById("order").style.paddingBottom = "1.75rem";

    document.getElementsByClassName("extras")[0].style.height = "0px";
    document.getElementsByClassName("extras")[1].style.height = "0px";
    document.getElementsByClassName("extras")[0].style.padding = "0px";
    document.getElementsByClassName("extras")[1].style.padding = "0px";
}

window.addEventListener("scroll", () => {
    if (window.scrollY < 64) {
        animateIn();

        document.getElementById("mainText").style.marginTop = "3rem";
        document.getElementById("mainText").style.left = "0px";

        document.getElementById("slogan").style.width = "100%";
        document.getElementById("slogan").style.position = "relative";
        document.getElementById("slogan").style.left = "0px";
        document.getElementById("slogan").style.bottom = "-8px";
        document.getElementById("slogan").style.textAlign = "center";

        document.getElementById("decoration").style.width = "10rem";
        document.getElementById("decoration").style.height = "158px";

        document.getElementById("order").style.height = "6rem";
        document.getElementById("order").style.paddingTop = "1.75rem";
        document.getElementById("order").style.paddingBottom = "1.75rem";

        document.getElementsByClassName("extras")[0].style.height = "0px";
        document.getElementsByClassName("extras")[1].style.height = "0px";
        document.getElementsByClassName("extras")[0].style.padding = "0px";
        document.getElementsByClassName("extras")[1].style.padding = "0px";
    }
    else {
        //document.getElementById("subtitle").style.fontSize = "1rem";
        document.getElementById("title").style.fontSize = "2rem";
        //document.getElementById("subtitle").style.left = "1.25rem";

        document.getElementById("mainText").style.marginTop = "1.625rem";

        animateOut();

        document.getElementById("slogan").style.width = "96px";
        document.getElementById("slogan").style.position = "absolute";
        document.getElementById("slogan").style.left = "192px";
        document.getElementById("slogan").style.bottom = "1px";
        document.getElementById("slogan").style.textAlign = "left";
        document.getElementById("slogan").style.lineHeight = "14px";

        document.getElementById("decoration").style.width = "0px";
        document.getElementById("decoration").style.height = "0px";

        document.getElementById("order").style.height = "4rem";
        document.getElementById("order").style.paddingTop = "0.875rem";
        document.getElementById("order").style.paddingBottom = "0.875rem";

        document.getElementsByClassName("extras")[0].style.height = "6rem";
        document.getElementsByClassName("extras")[1].style.height = "6rem";
        document.getElementsByClassName("extras")[0].style.paddingTop = "1.875rem";
        document.getElementsByClassName("extras")[1].style.paddingTop = "1.875rem";
    }
})

window.addEventListener("resize", () => {
    if (window.scrollY >= 64) {
        animateOut();
    }
})

function animateIn() {
    if (window.outerWidth > 640) {
        //document.getElementById("subtitle").style.fontSize = "1.875rem";
        document.getElementById("title").style.fontSize = "3.75rem";
        document.getElementById("title").style.left = "0px";
        //document.getElementById("subtitle").style.left = "2.5rem";
    }
    else {
        //document.getElementById("subtitle").style.fontSize = "1.5rem";
        document.getElementById("title").style.fontSize = "3rem";
        document.getElementById("title").style.left = "0.5rem";
        //document.getElementById("subtitle").style.left = "2.375rem";
    }
}

function animateOut() {
    if (window.outerWidth > 768) {
        document.getElementById("mainText").style.left = `calc(-11rem - ${getComputedStyle(document.getElementById('mainText')).marginLeft})`;
    }
    else if (window.outerWidth > 640) {
        document.getElementById("mainText").style.left = `calc(-1rem - ${getComputedStyle(document.getElementById('mainText')).marginLeft})`;
    }
    else {
        document.getElementById("mainText").style.left = `calc(1rem) - ${getComputedStyle(document.getElementById('mainText')).marginLeft}`;
    }
}