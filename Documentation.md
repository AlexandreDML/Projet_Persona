# Projet persona

## Objectif

Le but de notre projet est de permettre la visualisation d’un projet de simulation de l’IRIT en créant des personas 
grâce à une génération à travers l’IA. Pour cela le client nous a fourni des données, sous forme de document CSV qui permet 
d’identifier une personne et aussi des ménages, c’est à dire un groupe de personne vivant dans le même foyer. Le but étant de créer 
à travers les IA une persona qui soit le plus crédible possible, en prenant en compte qu’il devait y avoir une cohérence avec la 
personnalité, son âge et son physique mais surtout est-ce que ça personnalité influence son mode de transport.
Nous devons historiser tous nos prompt car l’idée derrière ce projet est surtout de pouvoir écrire une recommandation sur ce qu’est 
un bon prompt et comment l’écrire, comment il est structuré et ce qu’il ne faut pas faire en terme de prompt car cela amènera à des mauvais résultats. 
Nous devons aussi essayer de créer des visuels pour afficher les personas, dans notre prompt nous demandons donc une description physique pour 
pouvoir générer aussi à travers l’IA une image de la personne tout cela sera affiché ensuite sur un site qui permettra de générer plusieurs persona, 
de les noter et laisser un commentaire.

## Base de données

Base de données des prompts générant des Personas : avant chaque prompt, des paramètres seront prédéfinis par le prompteur pour aider l’IA à créer 
un Persona. On communiquera des informations sur la personne et sur son ménage. Chaque personne est identifiée par un numéro Personne (IDPe) par plusieurs 
caractéristiques personnelles (âge, diplôme, situation professionnelle, distance travail etc.) et par certaines conditions (obtention du permis ou non, 
possession ou non d’un abonnement transport, etc.). Chaque ménage est représenté par un numéro Ménage (IDM), par un code postal, un type de logement 
(maison, appartement etc.). Ces données vont permettre de générer un prompt. Un prompt est identifié par un IDPr, son texte et le logiciel de chat ayant 
accueilli ce prompt (GPT4, GPT 4 ALL, …). Après saisie et exécution, le prompt génère un résultat. Ce dernier est identifié par un IDR, et 2 textes 
(une description physique et un scenario). L’obtention du résultat permet de réaliser une visualisation (correspondant à une image physique de la création 
du Persona à partir des données en entrée (personne et ménage) ainsi que les données en résultat du prompt (description physique et scénario). Chaque 
visualisation est identifiée par un IDV et une adresse renvoyant à l’image générée. Chaque personne appartient à 1 et 1 seul ménage. Chaque personne et 
ménage peuvent être associés à 1 ou plusieurs prompts. Un prompt peut générer plusieurs résultatsregistrés dans une base de données.



## Script GPT4ALL

openai.api_base : Ceci est une variable d'environnement qui spécifie l'URL de base pour toutes les requêtes API à OpenAI. 
openai.api_key : Cette variable d'environnement est normalement utilisée pour stocker la clé API qui authentifie vos requêtes auprès de l'API OpenAI. 
prompt : Cette variable stocke le texte initial qui est envoyé au modèle pour générer une réponse. 
model : Cette variable contient le nom du modèle que vous souhaitez utiliser pour générer le texte. Ici, le nom du modèle est "stable-vicuna-138.q4_2". 
openai.Completion.create() : Cette fonction effectue une requête à l'API de complétion d'OpenAI avec les paramètres fournis. 
  •	model: Le modèle à utiliser pour la requête. 
  •	prompt: Le texte d'amorce à envoyer au modèle. 
  •	max_tokens: Le nombre maximum de tokens à générer. 
  •	temperature: Un paramètre qui contrôle la diversité des prédictions. Une valeur plus élevée produit des résultats plus aléatoires. 
  •	top_p: Un paramètre pour l'échantillonnage nucléaire, qui limite la masse de probabilité cumulée des options de token à considérer. n: Le nombre de complétions à générer pour chaque prompt. 
  •	echo: Un paramètre qui, s'il est vrai, renvoie le prompt en plus de la réponse générée. 
  •	stream: Si true, renvoie la réponse par morceaux. 
print(response) : Cette fonction imprime la réponse de l'API à la console.

