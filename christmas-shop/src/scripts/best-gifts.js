import gifts from "../data/gifts.json";
import { createCard, fisherYatesShuffle } from "./utils.js";

const bestGiftsCards = document.getElementById("bestGiftsCards");

/* Get 4 random gifts */
const shuffledData = fisherYatesShuffle([...gifts]);
const bestGifts = shuffledData.slice(0, 4);
bestGifts.forEach((item) => {
	const card = createCard(item);
	bestGiftsCards.appendChild(card);
});
