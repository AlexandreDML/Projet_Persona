// On récupère toutes les étoiles
var AllEtoile = $('.stars .star');

AllEtoile.click(onStarClick);

// event sur le clic d'étoile
function onStarClic(event) {

	// on récup l'objet
	var etoileChoisi = $(this);

	// on récup l'index
	var indexEtoile = etoileChoisi.data("index");

	// on récup son paret (pour le réutiliser dans un autre groupe)
	var parent = $(this).parent();

	// on modifie le style pour suprimmer les étoiles 
	parent.find('.star').addClass('stargrey');
	parent.find('.star').removeClass('yellow');

	//on modifie le style pour mettre les étoiles en jaune, pour chaque étoiles allant de 0 au clic
	for (var i = 0; i <= indexEtoile; i++) {

		var etoiles = parent.find('.star[data-index=' + i + ']');

		// Je remplie
		etoiles.addClass('yellow');
		etoiles.removeClass('stargrey');
	}
}