import gifts from "../data/gifts.json";
import { createCard, fisherYatesShuffle } from "./utils.js";

const giftsCards = document.getElementById("giftsCards");
const allTab = document.getElementById("allTab");
const workTab = document.getElementById("workTab");
const healthTab = document.getElementById("healthTab");
const harmonyTab = document.getElementById("harmonyTab");

/* Handle tab and filter gifts */
const handleTab = (tab) => {
	giftsCards.innerHTML = "";

	const filterData = gifts.filter((item) => {
		return item.category === tab || tab === "All";
	});

	if (tab === "All") {
		const shuffledData = fisherYatesShuffle([...gifts]);
		shuffledData.forEach((item) => {
			const card = createCard(item);
			giftsCards.appendChild(card);
		});
	} else {
		filterData.forEach((item) => {
			const card = createCard(item);
			giftsCards.appendChild(card);
		});
	}

	updateButtons(tab);
};

/* Update buttons */
const updateButtons = (currentTab) => {
	allTab.disabled = false;
	workTab.disabled = false;
	healthTab.disabled = false;
	harmonyTab.disabled = false;

	if (currentTab === "All") {
		allTab.disabled = true;
	} else if (currentTab === "For Work") {
		workTab.disabled = true;
	} else if (currentTab === "For Health") {
		healthTab.disabled = true;
	} else if (currentTab === "For Harmony") {
		harmonyTab.disabled = true;
	}
};

allTab.addEventListener("click", () => handleTab("All"));
workTab.addEventListener("click", () => handleTab("For Work"));
healthTab.addEventListener("click", () => handleTab("For Health"));
harmonyTab.addEventListener("click", () => handleTab("For Harmony"));

handleTab("All");

/* BackToTop button */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
	if (window.scrollY > 300) {
		backToTop.classList.add("show");
	} else {
		backToTop.classList.remove("show");
	}
});

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

backToTop.addEventListener("click", () => scrollToTop());
