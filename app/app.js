const slider = document.getElementById('slider');
const nextBtn = document.getElementById('nextBtn');
let currentPosition = 0; // Start at the initial position

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
