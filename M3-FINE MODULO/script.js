//CREO UN ARRAY CONTENENTE TUTTE LE SERIE IN MODO CHE SE NE DOVESSI AGGIUNGERE ALTRE MI BASTEREBBE CREARE UN ULTERIORE OGGETTO AL SUO INTERNO

const list = [
	{
		Titolo: "Unorthodox",
		img: "./ImgSerie/1.png",
		Alt: "unorthodoxImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "thriller",
		Visto: true,
		NumeroDiVisualizzazioni: 5231,
	},
	{
		Titolo: "After Life",
		img: "./ImgSerie/2.png",
		Alt: "afterLifeImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "commedia",
		Visto: true,
		NumeroDiVisualizzazioni: 8123,
	},
	{
		Titolo: "VisAVis Il prezzo del riscatto",
		img: "./ImgSerie/3.png",
		Alt: "afterLifeImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "thriller",
		Visto: true,
		NumeroDiVisualizzazioni: 9482,
	},
	{
		Titolo: "The Place",
		img: "./ImgSerie/4.png",
		Alt: "thePlaceImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "drammatico",
		Visto: true,
		NumeroDiVisualizzazioni: 3409,
	},
	{
		Titolo: "Summertime",
		img: "./ImgSerie/5.png",
		Alt: "summertimeImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "drammatico",
		Visto: true,
		NumeroDiVisualizzazioni: 7051,
	},
	{
		Titolo: "I delitti di Valhalla",
		img: "./ImgSerie/6.png",
		Alt: "delittivalhallaImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "thriller",
		Visto: true,
		NumeroDiVisualizzazioni: 6594,
	},
	{
		Titolo: "L'altra Grace",
		img: "./ImgSerie/7.png",
		Alt: "altragraceImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "drammatico",
		Visto: true,
		NumeroDiVisualizzazioni: 4110,
	},
	{
		Titolo: "Virgin River",
		img: "./ImgSerie/8.png",
		Alt: "virginriverImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "romantico",
		Visto: true,
		NumeroDiVisualizzazioni: 5837,
	},
	{
		Titolo: "The English Game",
		img: "./ImgSerie/9.png",
		Alt: "englishgameImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "drammatico",
		Visto: true,
		NumeroDiVisualizzazioni: 9893,
	},
	{
		Titolo: "Il Metodo Kominsky",
		img: "./ImgSerie/10.png",
		Alt: "kominskyImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "commedia",
		Visto: true,
		NumeroDiVisualizzazioni: 7532,
	},
	{
		Titolo: "Patto d'Amore",
		img: "./ImgSerie/11.png",
		Alt: "pattoAmoreImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "romantico",
		Visto: true,
		NumeroDiVisualizzazioni: 4145,
	},
	{
		Titolo: "La Case de las flores",
		img: "./ImgSerie/12.png",
		Alt: "casaFloresImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "commedia",
		Visto: true,
		NumeroDiVisualizzazioni: 8774,
	},
	{
		Titolo: "Collateral Beauty",
		img: "./ImgSerie/13.png",
		Alt: "collBeautyImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "romantico",
		Visto: true,
		NumeroDiVisualizzazioni: 6185,
	},
	{
		Titolo: "Self-Made",
		img: "./ImgSerie/14.png",
		Alt: "selfMadeImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "drammatico",
		Visto: true,
		NumeroDiVisualizzazioni: 7229,
	},
	{
		Titolo: "Freud",
		img: "./ImgSerie/15.png",
		Alt: "freudImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "thriller",
		Visto: true,
		NumeroDiVisualizzazioni: 9671,
	},
	{
		Titolo: "Grace and Frankie",
		img: "./ImgSerie/16.png",
		Alt: "GraceFrenkyImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "commedia",
		Visto: true,
		NumeroDiVisualizzazioni: 4753,
	},
	{
		Titolo: "Lasciati Andare",
		img: "./ImgSerie/17.png",
		Alt: "lasciatiandareImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "drammatico",
		Visto: true,
		NumeroDiVisualizzazioni: 6071,
	},
	{
		Titolo: "Dogman",
		img: "./ImgSerie/18.png",
		Alt: "dogmanImgSerie",
		descrizione:
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: "drammatico",
		Visto: true,
		NumeroDiVisualizzazioni: 7123,
	},
];

//Creo uno funzione che mi aggiunga altri elementi randomici alla lista in modo che sia più densa.
//In questo modo posso simulare una lista più lunga, oltretutto mi trovo molto più a mio agio ad avere un elenco ordinato piuttosto che elementi sparsi da richiamare.
// e ipotizzio che possa essere un procedimento più prossimo a quello che potrebbe essere la realà, al momento mi è piu logico pensare che grandi siti abbiamo grande organizzazione
//dunque mi avvalgo degli strumenti che conosco per organizzare.

function CreaOggettiArray(Titolo, alt, descrizione) {
	const numeroImg = list.length + 1;
	//aggiungo un immagine con numerazione crescente, dovessi immettere nella cartella un file 19.png la funzione la pusha dentro l'oggetto.
	/* const imgPath = `./M3-FINE MODULO/ImgSerie/${numeroImg}.png`; */
	//ma.....non riesco a ricercare come scrivere bene la funzione perchè è l'ultima cosa che sto facendo e il tempo stringe, dunque utilizzerò un proxy

	const imgPath = `./ImgSerie/proxy.png`;
	const titolo = String(Titolo);
	const generi = ["drammatico", "commedia", "thriller", "romantico"];
	const genere = generi[Math.floor(Math.random() * generi.length)];
	const Visto = false;
	const NumeroDiVisualizzazioni =
		Math.floor(Math.random() * (1000 - 10 + 1)) + 10;

	const NuovoTitolo = {
		Titolo: titolo,
		img: imgPath,
		Alt: alt,
		descrizione:
			descrizione ||
			"Sto Imparando ad inserire l'API summary da Wikipedia per non scrivere la descrizione manualmente",
		genere: genere,
		Visto: Visto,
		NumeroDiVisualizzazioni: NumeroDiVisualizzazioni,
	};

	list.push(NuovoTitolo);
}

//popolo la pagina di proxy per poter simulare più elementi

for (let i = list.length; i < 25; i++) {
	CreaOggettiArray(
		"Titolo " + (i + 1),
		"alt" + (i + 1),
		"Descrizione serie " + (i + 1)
	);
}

//CHECK OUTPUT

/* for(let i = 0; i<list.length; i++){
console.log(list[i].genere);
}; */

//Creo gli elementi che saranno inseriti all'interno della pagina

const sezioni = [
	"Trending Now",
	"Watch It Again",
	"New Releases",
	"Thriller",
	"Drama",
	"Commedy",
	"Movies",
	"Sci-Fi",
	"History",
	"Documentary",
	"Horror",
	"New Series",
	"Original Netflix",
	"Halloween",
];

function shuffleArray(array) {
	// Algoritmo Fisher-Yates per mescolare l'array
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Swap
	}
	return array;
}

function rowCreator() {
	const div = document.getElementById("MainCont");
	const row = document.createElement("div");
	row.className = "row";
	div.appendChild(row);

	const col = document.createElement("div");
	col.className = "col-12 mt-4";
	row.appendChild(col);

	// Mescola l'array list
	const shuffledList = shuffleArray([...list]); // Creiamo una copia di list e la mescoliamo

	let imagesHTML = shuffledList
		.map((item) => {
			return `<div><img src="${item.img}" alt="${item.Alt}" /></div>`;
		})
		.join("");

	// Seleziona una sezione random
	const randomSezione = sezioni[Math.floor(Math.random() * sezioni.length)];

	col.innerHTML = `
	  <div class="col-12 mt-4">
		<div class="fs-3 text-white">${randomSezione}</div>
		<div class="image-slider">
		  ${imagesHTML}
		</div>
	  </div>
	`;
}

// Crea 5 righe
for (let i = 0; i < 5; i++) {
	rowCreator();
}
