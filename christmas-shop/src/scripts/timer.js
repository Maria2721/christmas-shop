const updateTimer = () => {
	const curTime = new Date();
	const endTime = new Date("2025-01-01T00:00:00");

	const diffTime = endTime - curTime;

	if (diffTime <= 0) {
		clearInterval(timeInterval);
		return;
	}

	const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((diffTime / (1000 * 60)) % 60);
	const seconds = Math.floor((diffTime / 1000) % 60);

	document.getElementById("days").textContent = days;
	document.getElementById("hours").textContent = hours;
	document.getElementById("minutes").textContent = minutes;
	document.getElementById("seconds").textContent = seconds;
};

const timeInterval = setInterval(updateTimer, 1000);

updateTimer();
