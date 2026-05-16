
const texte1 = document.getElementById("title");
const texte2 = document.getElementById("paragraph");
const button = document.getElementById("button");

button.addEventListener("click", function() {
    texte1.textContent = "Bienvenue Pierre";
    texte2.textContent = "Dans votre entreprise API Business Technology, vous êtes un développeur web spécialisé dans la création de sites internet et d'applications web. Vous avez une solide expérience dans le développement front-end et back-end, et vous maîtrisez les technologies telles que HTML, CSS, JavaScript, ainsi que les frameworks populaires comme React et Node.js. Votre passion pour le développement web vous pousse à créer des solutions innovantes et à offrir une expérience utilisateur exceptionnelle à vos clients.";
});

const boite = document.getElementById("box");
const button2 = document.getElementById("btn2");

button2.addEventListener("click", function() {
    
    boite.style.backgroundColor = "red";
});

const input = document.getElementById("nom");
const buttony = document.getElementById("btn4");
const paratexte = document.getElementById("resultat");

function AfficherNom(){

    const rentreUtilisateur = input.value;
    paratexte.textContent = "Bonjour " + rentreUtilisateur+", bienvenue a API Business Technology!";
}

buttony.addEventListener("click", AfficherNom);

const buttonValider = document.getElementById("btnvalider");
const entréUtilisateur = document.getElementById("Entré");
const TexteResultat = document.getElementById("resultatTexte");

function AfficherTexte(){

    const texteUtilisateur = entréUtilisateur.value;

    if(texteUtilisateur === "" || !isNaN(texteUtilisateur)){

        TexteResultat.textContent = "Veuillez entrer un texte.";
        TexteResultat.style.color = "red";
        return;
    }
    else if(texteUtilisateur === "Pierre Richard Saint Louis"){

        TexteResultat.textContent = "Le PDG de API Business Technology est . " +texteUtilisateur+".";
        TexteResultat.style.color = "green";
    }
    else{

        TexteResultat.textContent = "Bonjour . " +texteUtilisateur+".";
        TexteResultat.style.color = "blue";
    }
   
}

buttonValider.addEventListener("click", AfficherTexte);


const boutonCouleur = document.getElementById("btnCouleur");
const boiteCouleur = document.getElementById("boxCouleur");

function ChangerCouleur(){

    boiteCouleur.classList.toggle("activeCouleur");
}

boutonCouleur.addEventListener("click", ChangerCouleur);


const Lampe = document.getElementById("lampe");
const boutonLampe = document.getElementById("boutonlampe");

function AllumerEteindreLampe(){

    Lampe.classList.toggle("allume");
}

boutonLampe.addEventListener("click", AllumerEteindreLampe);

const boutonAfficher = document.getElementById("btnafficher");
const containerTexte = document.getElementById("container");

function AfficherContenu(){

    const titre = containerTexte.innerHTML = "<h2>Bienvenue a API Business Technology</h2> <p>API Business Technology est une entreprise technologique qui fabrique des logiciels et qui propose des solutions numeriques.</p>";
}

boutonAfficher.addEventListener("click", AfficherContenu);

const boutonSupprimer = document.getElementById("btnsupprimer");
const paragraphSupprimer = document.getElementById("textesupprimer");

function SupprimerContenu(){

    paragraphSupprimer.remove();
}

boutonSupprimer.addEventListener("click", SupprimerContenu);

const boutonAjouterTache = document.getElementById("btntache");
const containerTaches = document.getElementById("liste");

function AjouterTache(){

    const titreDeTache = document.createElement("h1");
    titreDeTache.textContent = "Les taches a faires sont :";
    const containerListe = document.createElement("ul");
    const tache1 = document.createElement("li");
    const tache2 = document.createElement("li");
    const tache3 = document.createElement("li");
    const tache4 = document.createElement("li");
    tache1.textContent = "Créer un site web pour un client.";
    tache2.textContent = "Développer une application mobile pour un projet interne.";
    tache3.textContent = "Mettre à jour le système de gestion de contenu de l'entreprise.";
    tache4.textContent = "Collaborer avec l'équipe de design pour améliorer l'interface utilisateur.";
    containerListe.appendChild(tache1);
    containerListe.appendChild(tache2);
    containerListe.appendChild(tache3);
    containerListe.appendChild(tache4);
    containerTaches.appendChild(titreDeTache);
    containerTaches.appendChild(containerListe);

}

boutonAjouterTache.addEventListener("click", AjouterTache);

const containerContenu = document.getElementById("boxcontent");
const boutonAjouterContenu = document.getElementById("btncontent");

function VerifierContent(){

    containerContenu.classList.toggle("activecontent");

    if(containerContenu.classList.contains("activecontent")){

        containerContenu.textContent = "Le contenu est actif.";
    }
    else{
        containerContenu.textContent = "Le contenu est inactif.";
    }
}

boutonAjouterContenu.addEventListener("click", VerifierContent);

let tableauMoyenneEtudiant = [10, 15, 18, 20];


let nomEtudiant = "";

function CalculerMoyenne(tableauMoyenneEtudiant, nomEtudiant){

     let moyenneEtudiant = 0;

     let sommeNote = 0;

    for( let i = 0; i < tableauMoyenneEtudiant.length; i++){

        sommeNote += tableauMoyenneEtudiant[i];
    }
    moyenneEtudiant = sommeNote / tableauMoyenneEtudiant.length;

    console.log("La moyenne globale de " + nomEtudiant +  " est : " + moyenneEtudiant);

    if(moyenneEtudiant >= 10){

        console.log("L'etudiant " + nomEtudiant + " a reussi avec une moyenne de : " + moyenneEtudiant);
    }
    else{

        console.log("L'etudiant " + nomEtudiant + " a echoue avec une moyenne de : " + moyenneEtudiant);
    }
}

CalculerMoyenne(tableauMoyenneEtudiant, "Pierre Barigot");


let tableauProduitsInformatique = ["Laptop", "Souris", "Clavier", "Écran", "Imprimante"];
let nomProduit = "";

function RechercherProduits(tableauProduitsInformatique, nomProduit){

    if(tableauProduitsInformatique.includes(nomProduit)){

        console.log("Le produit " + nomProduit + " est disponible dans le tableau ");
    }

    else{
        console.log("Le produit " + nomProduit + " n'est pas disponible dans le tableau ");
    }
}

RechercherProduits(tableauProduitsInformatique, "Souris");

let Etudiant = {

    nom : "Pierre Barigot",
    age : 25,
    moyenne : 15,
    tableauNoteEtudiant : [10, 15, 18, 20]

};

function AfficherEtudiant(Etudiant){

     console.log("Nom de l'etudiant : " + Etudiant.nom);
     console.log("Age de l'etudiant : " + Etudiant.age);
     console.log("Moyenne de l'etudiant : " + Etudiant.moyenne);

    for(let i = 0; i < Etudiant.tableauNoteEtudiant.length; i++){

        console.log("L'index de note" + (i+1) + " : " + " Note " + Etudiant.tableauNoteEtudiant[i]);
    }
}

AfficherEtudiant(Etudiant);