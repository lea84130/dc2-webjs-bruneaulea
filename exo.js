let elt = document.getElementById('main');
elt.innerHTML = "<div>Je suis la div 1</div><div>Je suis la div 2</div><div>Je suis la div 3</div>";

var newElm = document.createElement("div");
newElm.innerHTML = "<div>Je suis la div 4</div><div>Je suis la div 5</div><div>Je suis la div 6</div>";
elt.appendChild(newElm);

newElm.innerHTML = "<span>Je suis le span 1</span> <span>Je suis le span 2</span>";
elt.replaceChild(document.createElement ("section"), newElm); /*newelm remplacé par document.createElement*/

/*elt.addEventListener("click", function (){
	elt.innerHTML= "c'est cliqué";
});*/

const div1 = elt.getElementsByTagName ("div") [0];
const div3 = elt.getElementsByTagName ("div") [2];

// Fonction de changement de couleur de la première div

function changerCouleur() {
	div1.style.color = "red";
}

// Ajout d'un écouteur d'événement sur la troisième div

div3.addEventListener("click", changerCouleur);

let serpillerewrite = {
	type : "serpillere",
	dimensions : 40
}

let serpillereLineadroite = JSON.stringify(serpillerewrite);
localStorage.setItem("serpillere", serpillereLineadroite)

let serpillereLinearead = localStorage.getItem("serpillere");
let serpillerereadJson = JSON.parse(serpillereLinearead);

console.log(serpillereLinearead)

elt.innerHTML = serpillerereadJson
/*créer un input avec un bouton submit qui sera enregistré dans le local storage
créer un deuxième bouton display lorsqu'on clique ca affiche le contenu du local storage sur notre html et vider le local storage*/

		var inputText = document.getElementById("inputText");
		var submitButton = document.getElementById("submitButton");
		var displayButton = document.getElementById("displayButton");
		var displayArea = document.getElementById("displayArea");

		// ajout d'un événement sur le bouton "submit"
		submitButton.addEventListener("click", function() {
			var text = inputText.value;
			localStorage.setItem("text", text);
			alert("Texte enregistré !");
		});

		// ajout d'un événement sur le bouton "display"
		displayButton.addEventListener("click", function() {
			var text = localStorage.getItem("text");
			if (text) {
				displayArea.textContent = "Texte enregistré : " + text;
				localStorage.removeItem("text");
			}

		});