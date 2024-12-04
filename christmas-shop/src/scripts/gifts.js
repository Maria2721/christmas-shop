import { createCard, fisherYatesShuffle } from "./utils.js";

const gifts = "../data/gifts.json";
const giftsCards = document.getElementById("giftsCards");

/* Get data gifts*/
fetch(gifts)
	.then((response) => {
		if (!response.ok) {
			throw new Error("Failed to load JSON");
		}
		return response.json();
	})
	.then((data) => {
		const shuffledData = fisherYatesShuffle([...data]);
		shuffledData.forEach((item) => {
			const card = createCard(item);
			giftsCards.appendChild(card);
		});
	})
	.catch(() => {
		console.log("Error loading JSON!");
	});
