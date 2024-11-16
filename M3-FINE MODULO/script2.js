document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".dropdown-item").forEach((item) => {
		item.addEventListener("click", function (e) {
			e.preventDefault(); // Previene il comportamento di navigazione
			const selectedText = this.getAttribute("data-value"); // Ottiene il valore selezionato
			document.getElementById("dropdownButton").textContent = selectedText; // Aggiorna il testo del pulsante
		});
	});
});
