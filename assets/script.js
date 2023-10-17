/****** 
 * Ajout des variables pour la réalisation du carrousel.
*/

// Récuperation de la fléche de gauche avec querySelector =>  dse la class= ".arrow-left"
let arrowLeft = document.querySelector(".arrow_left")
console.log(arrowLeft)

// Ajout de l'eventListerner action au click sur l'icone de gauche
arrowLeft.addEventListener("click", () => {
	console.log("J'ai clické sur la fléche de gauche")
})

// Récuperation de la fléche de droite avec querySelector =>  dse la class= ".arrow-right"
let arrowRight = document.querySelector(".arrow_right")
console.log(arrowRight)

// Ajout de l'eventListerner action au click sur l'icone de droite
arrowRight.addEventListener("click", () => {
	console.log("J'ai clické sur la fléche de droite")
})















/*const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
*/