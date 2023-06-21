// definition des variable avec le texte qui doit être affiché
var text = 'Sophie est une femme active et dynamique qui vit à Toulouse depuis plusieurs années. Elle occupe un poste de cadre dans une entreprise et possède un niveau d\'études supérieur (bac + 3 et plus). Elle a un permis de conduire et utilise principalement les transports en commun pour se déplacer.';
var text2 = 'Thomas est un jeune homme dynamique et ambitieux résidant à Toulouse. Il est actuellement en phase de transition entre ses études supérieures et sa vie professionnelle. Il poursuit ses études tout en travaillant à plein temps, ce qui témoigne de sa détermination et de son engagement.';
var text3 = 'Marie Leclerc est une femme d\'âge mûr, énergique et indépendante. Après une carrière réussie en tant qu\'agricultrice exploitante, elle profite désormais de sa retraite bien méritée. Malgré son âge avancé, Marie est une personne pleine de vie, toujours curieuse et prête à relever de nouveaux défis.';
var text4 = 'Santiago Fernandez est un jeune homme de 24 ans résidant à Buenos Aires, en Argentine. Il a obtenu un diplôme supérieur (bac + 3 et plus) et occupe un emploi à plein temps en tant que contremaître ou agent de maîtrise. Santiago est une personne ambitieuse et motivée, toujours prête à relever de nouveaux défis. Il apprécie l\'efficacité et la rigueur dans son travail.';

//variable qui va stocker le text entier
var allText = "";
var allText2 = "";
var allText3 = "";
var allText4 = "";

// cette fonction va mettre le texte dans un élément HTML
function putText(text, elementId) {
  document.getElementById(elementId).innerHTML = text;
}

// fonction qui va écrire le texte de manière progessive pour donner un effet d'écriture sur le moment 
function writeText() {
  for (let i = 0; i < Math.max(text.length, text2.length, text3.length, text4.length); i++) {
    // ajout d'un acractère dans le texte 
    if (i < text.length) {
      allText += text[i];
      setTimeout(putText, 150 * (i + 1), allText, "desc");
    }
    if (i < text2.length) {
      allText2 += text2[i];
      setTimeout(putText, 150 * (i + 1), allText2, "desc2");
    }
    if (i < text3.length) {
      allText3 += text3[i];
      setTimeout(putText, 150 * (i + 1), allText3, "desc3");
    }
    if (i < text4.length) {
      allText4 += text4[i];
      setTimeout(putText, 150 * (i + 1), allText4, "desc4");
    }
  }
}

// ensuite on appel la fonction juste au dessus lors du chargement de la page
window.onload = writeText;
