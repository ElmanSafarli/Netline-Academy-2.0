const slider = document.getElementById('slider');
const nextBtn = document.getElementById('nextBtn');
let currentPosition = 0; // Start at the initial position

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        const sliderWidth = slider.offsetWidth;
        const sliderItems = slider.querySelectorAll('.header-partners-slider-item');
        const itemWidth = sliderItems.length > 0 ? sliderItems[0].offsetWidth : 0; // Width of one item

        const maxScroll = slider.scrollWidth - sliderWidth;

        currentPosition += itemWidth;
        if (currentPosition > maxScroll) {
            currentPosition = 0;
        }

        slider.style.transform = `translateX(-${currentPosition}px)`;
    });
}


// Get all elements with class "option"
var options = document.querySelectorAll(".option");

if (options) {
    // Attach click event listener to each "option" element
    options.forEach(function (option) {
        option.addEventListener("click", function () {
            // Remove "active" class from all "option" elements
            options.forEach(function (opt) {
                opt.classList.remove("active");
            });

            // Add "active" class to the clicked "option" element
            this.classList.add("active");
        });
    });
}

const nextCategoryBtn = document.getElementById("nextCategoryBtn");
const prevCategoryBtn = document.getElementById("prevCategoryBtn");
const sliderCategory = document.getElementById("sliderCategory");
let slidePosition = 0;

// Function to move the slider to the next category
function moveToNextSlide() {
    if (slidePosition > -((sliderCategory.children.length - 1) * 330)) {
        slidePosition -= 330;
        sliderCategory.style.transform = `translateX(${slidePosition}px)`;
    }
}

// Function to move the slider to the previous category
function moveToPrevSlide() {
    if (slidePosition < 0) {
        slidePosition += 330;
        sliderCategory.style.transform = `translateX(${slidePosition}px)`;
    }
}

if (nextCategoryBtn) {
    // Event listener for the next button
    nextCategoryBtn.addEventListener("click", moveToNextSlide);

}

if (prevCategoryBtn) {
    // Event listener for the previous button
    prevCategoryBtn.addEventListener("click", moveToPrevSlide);

}


const dropdowns = document.querySelectorAll(".dropdown");

if (dropdowns) {
    dropdowns.forEach((dropdown) => {
        const select = document.querySelector(".select");
        const caret = document.querySelector(".caret");
        const menu = document.querySelector(".menu");
        const options = document.querySelectorAll(".menu li");
        const selected = document.querySelector(".selected");
        select.addEventListener("click", () => {
            caret.classList.toggle("caret-rotate");
            menu.classList.toggle("menu-open");
        });

        options.forEach((option) => {
            option.addEventListener("click", () => {
                selected.classList.remove("placeholder");
                selected.innerText = option.innerText;
                caret.classList.remove("caret-rotate");
                menu.classList.remove("menu-open");
                options.forEach((option) => option.classList.remove("active"));
                option.classList.add("active");
            });
        });
    });

}
