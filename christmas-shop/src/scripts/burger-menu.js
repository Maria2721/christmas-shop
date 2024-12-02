const burgerMenu = document.getElementById("burgerMenu");
const navMenu = document.getElementById("navMenu");
const body = document.body;

const handleMenu = () => {
	burgerMenu.classList.toggle("open");
	navMenu.classList.toggle("show");
	body.classList.toggle("hidden");
};

const handleMenuByLink = (event, link) => {
	event.preventDefault();
	handleMenu();

	setTimeout(() => {
		window.location.href = link.href;
	}, 450);
};

burgerMenu.addEventListener("click", handleMenu);

navMenu.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", (event) => handleMenuByLink(event, link));
});
