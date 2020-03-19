window.onload = function () {
};
// Listes de contenu à généré
var debutHarryPotter = ["Ron Weasley", " Hermione Granger ", " Neville Londubat ", " Drago Malefoy ", " Voldemort "];
var milieuHarryPotter = [" lance des tortue ", " crie ", " saute ", " tue ", "  envoie des peties bestiolles "];
var finHarryPotter = [" à dos de chameau ", " en vol sur un balet ", " sur Voldemort ", " en éternuant ", " à Poudlard "];

var debutAddams = ["Gomez Addams", " Morticia Addams ", " Mercredi Addams ", " Fétide Addams ", " La Chose "];
var milieuAddams = [" soulève une poutre ", " mange un rat ", " fais un clin d’oeil ", " ramasse une main ", "  simule un enlèvement "];
var finAddams = [" en criant ", " dans un vieux manoir ", " dans les égouts ", " en sautillant ", " dans la forêt "];
var choix = null;


// 2. Nous allons ensuite créer la fonction qui permet de générer un nombre du tableau entre 0 et 4.
const random = () => {
	return Math.floor(Math.random() * 5);
}
// 3. Ensuite nous créons la fonction qui génère un choix entre les deux thèmes. ( Nous pouvons également le voir ici en faisant un “console.log” ).
// "choixPhrase" a été implémenté sur le bouton via un "onclick" dans le HTML
const choixPhrase = (theme) => {
	choix = theme;
	console.log(choix);
}
// 4.  Nous allons ensuite créer la fonction qui permet de générer le choix du nombre de phrases à générer.
// "nombrePhrase" a été implémenté sur le bouton via un "onclick" dans le HTML
const nombrePhrase = (nbPhrase) => {
	nombre = nbPhrase;
	console.log(nbPhrase);
}
//5. Ensuite nous allons créer la fonction qui permet de récupérer le thème et de générer de façon aléatoire les phrases.
// "getSelect" a été implémenté sur le bouton via un "onclick" dans le HTML
const getSelect = (maSelection) => {
	//console.log(maSelection);
	
	//6. Nous créons tout d'abord la variable qui va permettre d’appeler la phrase “Harry”. 
	let phraseHarry = debutHarryPotter[random()] + milieuHarryPotter[random()] + finHarryPotter[random()];

	//7. Nous créons ensuite la variable qui va permettre cette fois ci d’appeler la phrase “Addams”
	let phraseAddams = debutAddams[random()] + milieuAddams[random()] + finAddams[random()];

	//8. Maintenant on va dire que SI “maSelection” est égal à “harryPotter”, ET que le nombre est supérieur à 0, ( on appel alors la variable “phraseHaary” créer plus haut:
	if (maSelection === "HarryPotter" && nombre > 0) {
		//console.log(phraseHarry);

		// 9. On créer une boucle WHILE, en disant que tant que le “nombre est supérieur à zéro, ALORS nous afficherons la ou les phrases qui dépendent de la sélection du “thème” et du “nombre” choisi.
		while (nombre > 0) {
			// On aurais pu aussi utiliser une boucle for "for (; nombre > 0; ) avec un console.log(nombre);"

			//"getElementById" ( on va chercher l'element que nous avons creer dans le fichier HTML, qui ai donc "mesPhrases", et nous lui attribuons  la variable "phraseHarry" que nousa avons creer dans la variable plus haut, (qui nous renvoie les phrases aléatoires de harry Potter)

			// 10. Dans cette même boucle, nous allons avant créer une variable “blockquote”, pour aller cherche l'élément du DOM avec l'ID "blockquote" avec la fonction “getElementById”.
			//"blockquote" a été auparavant implémenté dans le HTML via un "id"
			let blockquote = document.getElementById("blockquote")

			// 11. Nous allons également créer un élément "BLOCKQUOTE" que l'on stock dans une variable "bloc" avec la fonction “createElement”.
			let block = document.createElement("BLOCKQUOTE");

			// 12. Maintenant nous appelons ici l'élément "id blockquote" créer dans la variable plus haut, on créer un enfant de "p" avec la variable "bloc", donc des “blockquote”
			// On écrit du texte dans le HTML avec la variable "phraseHarry" créer plus haut, des phrases qui sont donc générer.
			// La méthode appendChild () ajoute un nœud en tant que dernier enfant d'un nœud.
			// inner HTML change le contenu HTML d'un élément avec l'id "mesPhrases", ici “phraseHarry”.
			blockquote.appendChild(block).innerHTML = phraseHarry;
			blockquote.appendChild(block).innerHTML = phraseHarry;

			//13. Nous pouvons alors afficher la phrase, avec à l'intérieur les bouts de phrases créer dans les tableaux plus haut, de façon aléatoire:
			phraseHarry = debutHarryPotter[random()] + milieuHarryPotter[random()] + finHarryPotter[random()];
			nombre--; // Ici on décrémente le “nombre” avec “--”, pour pas que la boucle soit infini, sinon la condition d'arrêt n’aura jamais lieux)
		}
	}
	//14. Maintenant on va dire que SINON SI “maSelection” est égal à “Addams”, ET que le nombre est supérieur à 0, ( on appellera alors la variable “phraseAddams” créer plus haut:
	else if (maSelection === "Addams" && nombre > 0)
		while (nombre > 0) {
			let blockquote = document.getElementById("blockquote")
			let block = document.createElement("BLOCKQUOTE");
			blockquote.appendChild(block).innerHTML = phraseAddams;
			blockquote.appendChild(block).innerHTML = phraseAddams;

			phraseAddams = debutAddams[random()] + milieuAddams[random()] + finAddams[random()];
			nombre--;
		} else
			alert("Choisir un thème et un nombre !");
}
// 15.Création de la fonction pour actualiser la page sur le boutton "recommancer"
const restart = () => {
	location.reload();
}
