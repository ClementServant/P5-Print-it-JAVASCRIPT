 /**
* *Ajout des variables pour la réalisation du carrousel.
*/ 


// !Récuperation de la fléche de gauche avec querySelector 

const arrowLeft = document.querySelector(".arrow_left")
console.log(arrowLeft)
// *Ajout de l'eventListerner action au click sur l'icone de gauche
arrowLeft.addEventListener("click", () => {
	const pointSelectionner = dot.findIndex(dot => dot.classList.contains("dot_selected"))
	// Calculer l'index du point suivant
	let pointPrecedent = pointSelectionner - 1 
	// Vérifier si nous avons atteint la fin du tableau et revenir au premier point si nécessaire
	if (pointPrecedent < 0) {
		pointPrecedent = dot.length - 1
	}
	// Désélectionnez le point actuellement sélectionné
	dot[pointSelectionner].classList.remove("dot_selected")
	// sélectionnez le point actuellement sélectionné
	dot[pointPrecedent].classList.add("dot_selected")
	// Recuperation de limage du slider
	const imageDuSlider = document.querySelector(".banner-img")
	//changer l'image du slider
    imageDuSlider.src = "./assets/images/slideshow/" + slides[pointPrecedent].image
    // Passez à la diapositive suivante en utilisant nextIndex
    const texteDuSlider = document.querySelector(".banner-tagLine")
	 // Mettez à jour l'image et la ligne de balisage du slider
    texteDuSlider.innerHTML = slides[pointPrecedent].tagLine
	
	console.log(pointPrecedent)
})

// !Récuperation de la fléche de droite avec querySelector 

const arrowRight = document.querySelector(".arrow_right")
console.log(arrowRight)
// *Ajout de l'eventListerner action au click sur l'icone de droite
arrowRight.addEventListener("click", () => {
	const pointSelectionner = dot.findIndex(dot => dot.classList.contains("dot_selected"))

	let pointSuivant = pointSelectionner + 1 
		
	if (pointSuivant === dot.length) {
		pointSuivant = 0
	}

	dot[pointSelectionner].classList.remove("dot_selected")
	dot[pointSuivant].classList.add("dot_selected")	

	const imageDuSlider = document.querySelector(".banner-img")
    imageDuSlider.src = "./assets/images/slideshow/" + slides[pointSuivant].image
    
    const texteDuSlider = document.querySelector(".banner-tagLine")
    texteDuSlider.innerHTML = slides[pointSuivant].tagLine
	
	console.log(pointSuivant)
})


/** 
 * 
 * *Ajout des bullet points sur la partie basse du slider
 * 
 * ?Ajout des bullets points depuis le script.js
 * 
 */

let slider = document.querySelector(".dots")
let dot = []

for (let i = 0; i < 4; i++) {
	let span = document.createElement("span")
	span.classList.add("dot")
	slider.appendChild(span)
	// !Ajout du point d'affichage en cours.
	dot.push(span)
	dot[0].classList.add("dot_selected")
}
console.log(slider)

/**
 * *Modification du slide au clic sur les fléches 
 * 
 */

const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/**
 * *Ajout de la funtion d'affichage
 */



