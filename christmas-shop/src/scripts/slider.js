let slide = 0;
let padding = 82;
let clicks = 3;
const slider = document.getElementById("slider");
const leftSlide = document.getElementById("leftSlide");
const rightSlide = document.getElementById("rightSlide");

const getScrollbarWidth = () => {
	return window.innerWidth - document.documentElement.clientWidth;
};
const scrollbarWidth = getScrollbarWidth();

const handleSlider = () => {
	const moveWidth = (1990 + padding + padding - slider.offsetWidth) / clicks;

	slider.style.transform = `translateX(-${moveWidth * slide}px)`;

	leftSlide.disabled = slide === 0;
	rightSlide.disabled = slide === clicks;
};

leftSlide.addEventListener("click", () => {
	if (slide > 0) {
		slide--;
		handleSlider();
	}
});

rightSlide.addEventListener("click", () => {
	if (slide < clicks) {
		slide++;
		handleSlider();
	}
});

const getValueFromScreenWidth = () => {
	padding = window.innerWidth <= 1439 ? 8 : 82;
	clicks = window.innerWidth <= 768 ? 6 : 3;
	slide = 0;

	const sliderSection = document.querySelector(".slider");
	const sliderContainer = document.querySelector(".slider_container");
	if (sliderSection && sliderContainer) {
		sliderContainer.style.width = `${sliderSection.offsetWidth}px`;
	}
	const sliderRow = document.querySelector(".slider_row");
	sliderRow.style.padding = `0 ${padding}px`;

	handleSlider();
};

getValueFromScreenWidth();
window.addEventListener("resize", getValueFromScreenWidth);
