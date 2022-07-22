// -------------- Etape 1

let hercule = {
    name : 'Hercule',
    job : 'Demi-dieu',
    age : 35,
    department : 75,
    arm : 60.5,
    inRelationship : true,
};

// Ici, on a appelle la fonction "fillProfil", qui se trouve dans l'objet base (du fichier base.js)
base.fillProfil(hercule);

// -------------- Etape 2

// On crée un tableau pour représenter la liste d'amis
let friends = ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'];

base.printFriends(friends);

// Ici, on appelle setBestFriend en lui filant le premier élément de notre tableau (c'est à dire la chaine 'Jupiter')
base.setBestFriend(friends[0]);

// -------------- Etape 3

// On crée un élément HTML, ça sera un h1 (à ce stade, il n'est pas encore visible dans notre page HTML)
// comme on aura besoin de l'utiliser, on doit le stocker dans une variable
const h1 = document.createElement('h1');

// On lui rajoute la classe "banner__title"
h1.classList.add('banner__title')

//Ecris dedans Vous consultez le profil de Hercule
h1.textContent = 'Vous consultez le profil de Hercule';

// On récupère l'élément qui a l'id "header-banner" dans notre page HTML, et on le stocke dans une variable
let headerBanner = document.getElementById('header-banner')

// On insère notre titre dans le header
headerBanner.appendChild(h1);

// -------------- Etape 4

// On doit appeller displayWork 12 fois en lui donnant un chiffre de 0 à 11,
// Du coup, on fait une boucle for qui sera executée 12 fois
for (let i = 0 ; i < 12 ; i++) {
    // Ici, i vaudra 0 lors du premier tour de boucle, puis 1 lors du deuxième tour de boucle, etc...
    base.displayWork(i);
};

// -------------- Etape 5

// On stocke l'heure courante dans une variable, pour l'utiliser plus tard
let currentHour = base.getHour();

// On récupère l'élément HTML que l'on va devoir modifier pour préciser si Hercule est dispo ou pas
let availabilityElement = document.getElementById("availability");

// On dit qu'hercule est dispo entre 8 et 20h,
// (en gros, si l'heure courante est superieure ou egale à 8 ET inferieure ou égale à 20)
if (currentHour >= 8 && currentHour <= 20) {  
    // Ici Hercule est dispo, alors on écrit "Disponible" à l'interieur de l'élément HTML qui affiche sa dispo
    availabilityElement.textContent = 'Disponible';
} else {
    availabilityElement.textContent = 'Indisponible';
    availabilityElement.classList.add('off');
};


// -------------- Etape 6


// On crée une fonction qui aura besoin qu'on lui donne un nom et un département pour générer un pseudo
function pseudo(nom, departement){
    // Ici, on se sert du nom et du département qui seront passé en paramètre 
    // lorsque la fonction sera appelée
    return nom + ' du '+ departement ;


};

// On récupère l'élément qui a l'id 'profil-name' pour pouvoir écrire le pseudo d'Hercule dedans
let profilName = document.getElementById('profil-name');

// On remplace le texte dans cet élément par le pseudo d'hercule,
// Pour ça, on appelle la fonction pseudo(), en lui filant le nom et le département d'Hercule
profilName.textContent = pseudo(hercule.name, hercule.department); 

// Si on avait voulu afficher le pseudo 'Andre du 64', on aurait pu faire
// profilName.textContent = pseudo('Andre', 64); 




// -------------- Etape 7



// On récupère l'élément HTML sur lequel on va devoir écouter un click
let menuTogglerElement = document.getElementById('menu-toggler');

// On crée une fonction qui affichera ou cachera le menu,
// on la passera ensuite au navigateur pour qu'il l'execute lors d'un click sur l'élément menuTogglerElement
function toggleMenu () {
    console.log('CLICKED');
    let element = document.getElementById('header-banner');

    // Si l'élément a déjà la classe "banner--open", on lui enlève, sinon on lui rajoute
    element.classList.toggle('banner--open');
    
};

// Raccordement entre l'élément et le handler, via l'événement de type 'click'.
// En gros: On dit au navigateur d'executer la fonction toggleMenu lorsqu'il détectera un click sur menuTogglerElement
menuTogglerElement.addEventListener('click', toggleMenu);






