/* Questo Script lo implementato guardando un tutorial, era ancora troppo difficile al momento */
/* utilizzando la documentazione di bootstrap non ho trovato un carosello simile a quello che volevo fare */

const sliders = document.querySelectorAll(".image-slider");

sliders.forEach((slider) => {
	let isMouseDown = false;
	let startX;
	let scrollLeft;

	// Inizia il drag
	slider.addEventListener("mousedown", (e) => {
		isMouseDown = true;
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
		slider.style.cursor = "grabbing";
	});

	slider.addEventListener("mousemove", (e) => {
		if (!isMouseDown) return;
		e.preventDefault();

		const x = e.pageX - slider.offsetLeft;
		const walk = x - startX;

		slider.scrollLeft = scrollLeft - walk;
	});

	// Termina il drag
	slider.addEventListener("mouseup", () => {
		isMouseDown = false;
		slider.style.cursor = "grab";
	});

	// Disabilita il drag se si esce dal contesto
	slider.addEventListener("mouseleave", () => {
		isMouseDown = false;
		slider.style.cursor = "grab";
	});
});

/* ----------------------------------- */
