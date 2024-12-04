import { createCard, fisherYatesShuffle } from "./utils.js";

const gifts = "/maria2721-JSFE2024Q4/christmas-shop/src/data/gifts.json";
const bestGiftsCards = document.getElementById("bestGiftsCards");

/* Get 4 random gifts*/
fetch(gifts)
	.then((response) => {
		if (!response.ok) {
			throw new Error("Failed to load JSON");
		}
		return response.json();
	})
	.then((data) => {
		const shuffledData = fisherYatesShuffle([...data]);
		const bestGifts = shuffledData.slice(0, 4);
		bestGifts.forEach((item) => {
			const card = createCard(item);
			bestGiftsCards.appendChild(card);
		});
	})
	.catch(() => {
		console.log("Error loading JSON!");
	});
