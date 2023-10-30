// !Récuperation de la fléche de gauche avec querySelector 

/*const arrowLeft = document.querySelector(".arrow_left")
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
})*/

/**
 * * Modification du code pour éviter les répétitions en ajoutant des fonctions
 */

const flecheDeGauche = document.querySelector(".arrow_left")
const flecheDeDroite = document.querySelector(".arrow_right")
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

// ! ajout function de se qui change

function changerDeSlide(flecheSelectionner) {
    const pointSelectionner = dot.findIndex(dot => dot.classList.contains("dot_selected"))
    let nouvelleIndex

    if (flecheSelectionner === "flecheDeGauche") {
        nouvelleIndex = pointSelectionner - 1
        if (nouvelleIndex < 0) {
            nouvelleIndex = dot.length - 1
        }
    } else if (flecheSelectionner === "flecheDeDroite") {
        nouvelleIndex = pointSelectionner + 1
        if (nouvelleIndex === dot.length) {
            nouvelleIndex = 0
        }
    }

	// ! Se qui a en commun pour chaque fleches

    dot[pointSelectionner].classList.remove("dot_selected")
    dot[nouvelleIndex].classList.add("dot_selected")

    const imageDuSlider = document.querySelector(".banner-img")
    imageDuSlider.src = "./assets/images/slideshow/" + slides[nouvelleIndex].image

    const texteDuSlider = document.querySelector(".banner-tagLine")
    texteDuSlider.innerHTML = slides[nouvelleIndex].tagLine
}


flecheDeGauche.addEventListener("click", () => {
	changerDeSlide("flecheDeGauche")
})


flecheDeDroite.addEventListener("click", () => {
	changerDeSlide("flecheDeDroite")
})







