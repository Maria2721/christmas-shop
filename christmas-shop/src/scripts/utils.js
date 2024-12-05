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
			? "/maria2721-JSFE2024Q4/christmas-shop/assets/images/gift-for-work.png"
			: cardData.category === "For Health"
			? "/maria2721-JSFE2024Q4/christmas-shop/assets/images/gift-for-health.png"
			: cardData.category === "For Harmony"
			? "/maria2721-JSFE2024Q4/christmas-shop/assets/images/gift-for-harmony.png"
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
	header.textContent = cardData.name;
	textContainer.appendChild(tag);
	textContainer.appendChild(header);

	card.appendChild(imgContainer);
	card.appendChild(textContainer);

	return card;
};

export const createSuperpower = (title, value) => {
	const superpower = document.createElement("div");
	superpower.className = "superpower__row";

	const superpowerTitle = document.createElement("p");
	superpowerTitle.className = "superpower__title";
	superpowerTitle.textContent = title;

	const superpowerValue = document.createElement("p");
	superpowerValue.className = "superpower__value";
	superpowerValue.textContent = value;

	const coloredValue = +value.slice(1, 2);
	const superpowerSnowflakes = document.createElement("div");
	superpowerSnowflakes.className = "superpower__snowflakes";
	for (let i = 0; i < 5; i++) {
		const snowflake = document.createElement("img");
		snowflake.className = "snowflake__img";
		snowflake.src =
			"/maria2721-JSFE2024Q4/christmas-shop/assets/images/snowflake.svg";
		snowflake.alt = "Snowflake";
		snowflake.width = 16;
		snowflake.height = 16;

		if (i >= coloredValue) {
			snowflake.style.opacity = 0.1;
		}

		superpowerSnowflakes.appendChild(snowflake);
	}

	superpower.appendChild(superpowerTitle);
	superpower.appendChild(superpowerValue);
	superpower.appendChild(superpowerSnowflakes);

	return superpower;
};

export const createModal = (modalData) => {
	const modal = document.createElement("div");
	modal.className = "modal_gift";

	const buttonClose = document.createElement("button");
	buttonClose.className = "modal_close";
	buttonClose.type = "button";
	buttonClose.id = "buttonClose";

	const svgClose = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"svg"
	);
	svgClose.setAttribute("width", "40");
	svgClose.setAttribute("height", "40");
	svgClose.setAttribute("viewBox", "0 0 40 40");
	svgClose.setAttribute("fill", "none");
	svgClose.setAttribute("xmlns", "http://www.w3.org/2000/svg");

	svgClose.innerHTML = `
	<path d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    <path d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />`;

	buttonClose.appendChild(svgClose);
	modal.appendChild(buttonClose);

	/* create Image */
	const imgContainer = document.createElement("div");
	imgContainer.className = "modal_gift__imgContainer";
	const img = document.createElement("img");
	img.className = "modal_gift__img";
	img.src =
		modalData.category === "For Work"
			? "/maria2721-JSFE2024Q4/christmas-shop/assets/images/gift-for-work.png"
			: modalData.category === "For Health"
			? "/maria2721-JSFE2024Q4/christmas-shop/assets/images/gift-for-health.png"
			: modalData.category === "For Harmony"
			? "/maria2721-JSFE2024Q4/christmas-shop/assets/images/gift-for-harmony.png"
			: "";
	img.alt = modalData.name;
	img.width = 310;
	img.height = 230;
	imgContainer.appendChild(img);

	const contentContainer = document.createElement("div");
	contentContainer.className = "modal_gift__contentContainer";

	/* create Text */
	const textContainer = document.createElement("div");
	textContainer.className = "modal_gift__text";
	const tag = document.createElement("h4");
	const tagColor =
		modalData.category === "For Work"
			? "tag_work"
			: modalData.category === "For Health"
			? "tag_health"
			: modalData.category === "For Harmony"
			? "tag_harmony"
			: "";
	tag.className = `modal_gift__tag ${tagColor}`;
	tag.textContent = modalData.category;
	const header = document.createElement("h3");
	header.className = "modal_gift__header";
	header.textContent = modalData.name;
	const desc = document.createElement("span");
	desc.className = "modal_gift__desc";
	desc.textContent = modalData.description;
	textContainer.appendChild(tag);
	textContainer.appendChild(header);
	textContainer.appendChild(desc);

	/* create Superpowers */
	const superpowersContainer = document.createElement("div");
	superpowersContainer.className = "modal_gift__superpowers";
	const title = document.createElement("h4");
	title.className = "modal_gift__title";
	title.textContent = "Adds superpowers to:";

	const superpowers = document.createElement("div");
	superpowers.className = "superpowers";
	const superpowerLive = createSuperpower("Live", modalData.superpowers.live);
	const superpowerCreate = createSuperpower(
		"Create",
		modalData.superpowers.create
	);
	const superpowerLove = createSuperpower("Love", modalData.superpowers.love);
	const superpowerDream = createSuperpower(
		"Dream",
		modalData.superpowers.dream
	);
	superpowers.appendChild(superpowerLive);
	superpowers.appendChild(superpowerCreate);
	superpowers.appendChild(superpowerLove);
	superpowers.appendChild(superpowerDream);

	superpowersContainer.appendChild(title);
	superpowersContainer.appendChild(superpowers);

	contentContainer.appendChild(textContainer);
	contentContainer.appendChild(superpowersContainer);

	modal.appendChild(imgContainer);
	modal.appendChild(contentContainer);

	return modal;
};

export const getCardDetails = (card) => {
	const header = card.querySelector(".bestGifts_card__header").textContent;
	return header;
};

/* Shuffle data */
export const fisherYatesShuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};
