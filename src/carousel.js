const slidesContainer = document.getElementById("slidesContainer");
const slide = document.querySelector(".slide");
const left = document.getElementById("leftScroll");
const right = document.getElementById("rightScroll");

right.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    if (slidesContainer.scrollLeft + slideWidth >= slidesContainer.scrollWidth) {
        slidesContainer.scrollLeft = 0;
    }
    else {
        console.log(slidesContainer.scrollLeft + slideWidth);
        console.log(slidesContainer.scrollWidth)
        slidesContainer.scrollLeft += slideWidth;
    }
});

left.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    if (slidesContainer.scrollLeft - slideWidth < 0) {
        slidesContainer.scrollLeft = slidesContainer.scrollWidth;
    }
    else {
        console.log(slidesContainer.scrollLeft + slideWidth);
        console.log(slidesContainer.scrollWidth)
        slidesContainer.scrollLeft -= slideWidth;
    }
});