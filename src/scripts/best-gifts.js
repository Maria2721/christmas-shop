import gifts from "../data/gifts.json";

import {
	createCard,
	fisherYatesShuffle,
	getCardDetails,
	createModal,
} from "./utils.js";

const bestGiftsCards = document.getElementById("bestGiftsCards");
const modal = document.getElementById("modal");

/* Get 4 random gifts */
const shuffledData = fisherYatesShuffle([...gifts]);
const bestGifts = shuffledData.slice(0, 4);

bestGifts.forEach((item) => {
	const card = createCard(item);
	bestGiftsCards.appendChild(card);
});

/* Modal for gift */
const openModal = (card) => {
	const name = getCardDetails(card);
	const cardData = shuffledData.find((item) => item.name === name);
	const modalGift = createModal(cardData);
	modal.innerHTML = "";
	modal.appendChild(modalGift);

	modal.classList.add("open");
	document.body.style.overflow = "hidden";
};

const closeModal = () => {
	modal.classList.remove("open");
	document.body.style.overflow = "";
	modal.innerHTML = "";
};

bestGiftsCards.addEventListener("click", (event) => {
	const card = event.target.closest(".bestGifts_card");
	if (card) {
		openModal(card);
	}
});

modal.addEventListener("click", (event) => {
	const modalClose = event.target.closest(".modal_close");
	if (event.target.classList.contains("modal") || modalClose) {
		closeModal();
	}
});
