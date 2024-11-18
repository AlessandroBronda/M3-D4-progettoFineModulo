document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".dropdown-item").forEach((item) => {
		item.addEventListener("click", function (e) {
			e.preventDefault();
			const selectedText = this.getAttribute("data-value");
			document.getElementById("dropdownButton").textContent = selectedText;
		});
	});
});
