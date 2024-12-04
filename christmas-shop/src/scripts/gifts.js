import { createCard, fisherYatesShuffle } from "./utils.js";

const gifts = "../data/gifts.json";
const giftsCards = document.getElementById("giftsCards");
const allTab = document.getElementById("allTab");
const workTab = document.getElementById("workTab");
const healthTab = document.getElementById("healthTab");
const harmonyTab = document.getElementById("harmonyTab");
let giftsData = [];

/* Get data gifts */
fetch(gifts)
	.then((response) => {
		if (!response.ok) {
			throw new Error("Failed to load JSON");
		}
		return response.json();
	})
	.then((data) => {
		giftsData = data;
		const shuffledData = fisherYatesShuffle([...data]);
		shuffledData.forEach((item) => {
			const card = createCard(item);
			giftsCards.appendChild(card);
		});
		allTab.disabled = true;
	})
	.catch(() => {
		console.log("Error loading JSON!");
	});

/* Handle tab and filter gifts */
const handleTab = (tab) => {
	giftsCards.innerHTML = "";

	const filterData = giftsData.filter((item) => {
		return item.category === tab || tab === "All";
	});

	filterData.forEach((item) => {
		const card = createCard(item);
		giftsCards.appendChild(card);
	});

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
