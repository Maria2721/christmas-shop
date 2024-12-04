export const createCard = (cardData) => {
	const card = document.createElement("div");
	card.className = "bestGifts_card";

	/* create Image */
	const imgContainer = document.createElement("div");
	imgContainer.className = "bestGifts_card__imgContainer";
	const img = document.createElement("img");
	img.className = "bestGifts_card__img";
	img.src =
		cardData.category === "For Work"
			? "/maria2721-JSFE2024Q4/christmas-shop/src/assets/images/gift-for-work.png"
			: cardData.category === "For Health"
			? "/maria2721-JSFE2024Q4/christmas-shop/src/assets/images/gift-for-health.png"
			: cardData.category === "For Harmony"
			? "/maria2721-JSFE2024Q4/christmas-shop/src/assets/images/gift-for-harmony.png"
			: "";
	img.alt = cardData.name;
	img.width = 310;
	img.height = 230;
	imgContainer.appendChild(img);

	/* create Text */
	const textContainer = document.createElement("div");
	textContainer.className = "bestGifts_card__text";
	const tag = document.createElement("h4");
	const tagColor =
		cardData.category === "For Work"
			? "tag_work"
			: cardData.category === "For Health"
			? "tag_health"
			: cardData.category === "For Harmony"
			? "tag_harmony"
			: "";
	tag.className = `bestGifts_card__tag ${tagColor}`;
	tag.textContent = cardData.category;
	const header = document.createElement("h3");
	header.className = "bestGifts_card__header";
	header.textContent = cardData.description;
	textContainer.appendChild(tag);
	textContainer.appendChild(header);

	card.appendChild(imgContainer);
	card.appendChild(textContainer);

	return card;
};

/* Shuffle data*/
export const fisherYatesShuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};
