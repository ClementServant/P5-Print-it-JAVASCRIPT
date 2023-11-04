const flecheDeGauche = document.querySelector(".arrow_left")
const flecheDeDroite = document.querySelector(".arrow_right")
let slider = document.querySelector(".dots")
let dot = []

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

for (let i = 0; i < slides.length; i++) {
	let span = document.createElement("span")
	span.classList.add("dot")
	slider.appendChild(span)
	// !Ajout du point d'affichage en cours.
	dot.push(span)
	dot[0].classList.add("dot_selected")
}


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
// ! Appel de la function 

flecheDeGauche.addEventListener("click", () => {
	changerDeSlide("flecheDeGauche")
})

flecheDeDroite.addEventListener("click", () => {
	changerDeSlide("flecheDeDroite")
})







