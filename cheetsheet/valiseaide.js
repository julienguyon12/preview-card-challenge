function supprimercontenu(){
    var sectionValise = document.getElementById("section-valise");            
    // sectionValise.parentNode.removeChild(sectionValise);
    // ajoutercontenu();
    sectionValise.innerHTML += `<div class="container-valise-interieur " id="container-valise-interieur">
                    <div class="flex-icon-retour">
                        <div class="icon-retour" id="btn-retour">
                            <div class="arrow">
                            </div>
                        </div>
                    </div>
                    <div class="container-valise-image zoom" >
                        
                        <div id="vetement" class="contenu-valise">
                            <h5 class="valise-title">Mes vetements</h5>
                            <img src="../img/valise/vetement.JPG" alt="" class="valise-image">
                        </div>
                        <div id="sac" class="contenu-valise">
                            <h5 class="valise-title">Mon sac</h5>
                            <img src="../img/valise/sac.JPG" alt="" class="valise-image">
                        </div>
                        <div id="electronique" class="contenu-valise">
                            <h5 class="valise-title">Mon materiel electronique</h5>
                            <img src="../img/valise/electronique.JPG" alt="" class="valise-image">
                        </div>
                        <div id="chaussures" class="contenu-valise">
                            <h5 class="valise-title">Mes chaussures</h5>
                            <img src="../img/valise/chaussure.JPG" alt="" class="valise-image">
                        </div>
                        <div id="equipement" class="contenu-valise">
                            <h5 class="valise-title">Mon equipement surf</h5>
                            <img src="../img/valise/equipementsurf.JPG" alt="" class="valise-image">
                        </div>
                        <div id="accessoires" class="contenu-valise">
                            <h5 class="valise-title">Mes accessoires</h5>
                            <img src="../img/valise/accessoire.JPG" alt="" class="valise-image">
                        </div>
                    </div>
                </div>`
    ;
    setTimeout(translater, 1000);
    
}
function translater(){
    var valiseGlobale = document.getElementById("container-valise-globale");
    
    valiseGlobale.classList.add('translatsection');
    translater2();
    
}
function translater2(){
    var sectionValise = document.getElementById("container-valise-interieur");
    sectionValise.classList.add('translatsection');
    eventListeners();
}
function sortirValise(){
    var valiseGlobale = document.getElementById("container-valise-interieur");
    sectionValise.classList.add('translatsection-valise');
    setTimeout(fermerValise, 400);
}
function fermerValise(){
    var sectionValise = document.getElementById("section-valise");            
    // sectionValise.parentNode.removeChild(sectionValise);
    // ajoutercontenu();
    sectionValise.innerHTML = `<div class="container-valise-globale-translater" id="container-valise-globale-translater">
                    <h2 class="title">Ma Valise</h2>
                    <div class="container-image-ouvrir-valise" id="image-valise">
                        <img src="../img/valise/valise1.JPG" alt="" class="image-valise-globale"  tabindex="0">
                        <div class="ouvrir-valise">
                            <span class="titre-ouvrir-valise">Ouvrez moi!</span>
                        </div>
                    </div>`
    ;
    setTimeout(entrerValiseAccueil, 1);
    
    
}
function entrerValiseAccueil(){
    var sectionValise = document.getElementById("container-valise-globale-translater");
    sectionValise.classList.add('translatsection');
    eventListeners();
}
function sortirValiseInterieur(){
    var sectionValise = document.getElementById("container-valise-interieur");
    console.log(sectionValise);
    sectionValise.classList.add('translatsection-valise');
    setTimeout(fermerValiseInterieur, 400);
}
function fermerValiseInterieur(){
    var sectionValise = document.getElementById("section-valise");            
    // sectionValise.parentNode.removeChild(sectionValise);
    // ajoutercontenu();
    sectionValise.innerHTML = `<button type="button" id="btn-detail-retour" class="btn-retour" tabindex="0" id="btn-retour-detail">Retour</button>
                <div class="boite-valise-detail" id="boite-valise-detail">
                    <img src="../img/valise/equipementsurf.JPG" alt="" class="image-valise-detail">
                    <div class="container-equipement">
                        <h5 class="titre-valise-detail">Mon équipement</h5>
                        <p class="p-valise-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, modi rerum optio porro praesentium nisi debitis itaque voluptatem deserunt dolores suscipit fugit beatae velit dolor id. Eveniet deserunt illo laboriosam!</p>
                    </div>
                    <div class="container-conseil">
                        <h5 class="titre-valise-detail">Mon conseil</h5>
                        <p class="p-valise-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, modi rerum optio porro praesentium nisi debitis
                            itaque voluptatem deserunt dolores suscipit fugit beatae velit dolor id. Eveniet deserunt illo laboriosam!</p>
                    </div>
                </div>`
    ;
    setTimeout(entrerValiseDetail, 0);   
}
function entrerValiseDetail(){
    var sectiondetail = document.getElementById("boite-valise-detail");
    console.log(sectiondetail);
    sectiondetail.classList.add('translatsection');
    
    eventListeners();
}

function eventListeners() {
  const listeValise = document.getElementById("image-valise");
  const retourValise = document.getElementById("btn-retour");
  const vetement = document.getElementById("vetement");
  const sac = document.getElementById("sac");
  const electronique = document.getElementById("electronique");
  const chaussures = document.getElementById("chaussures");
  const equipement = document.getElementById("equipement");
  const accessoires = document.getElementById("accessoires");
  const retourValiseDetail = document.getElementById("btn-retour");
  
 if (listeValise != null){
     listeValise.addEventListener("click", function() {
    supprimercontenu();
  });
  listeValise.addEventListener("keypress", function(e) {
      if (e.key === 'Enter') {
        supprimercontenu();
    } 
  });
 }
 else if (retourValise != null) {
    document.getElementById("btn-retour").addEventListener("click", function() {
    fermerValise();
    
  });
  retourValise.addEventListener("keypress", function(e) {
      if (e.key === 'Enter') {
        translaterValise();
    } 
  });
 
    console.log(vetement);
    vetement.addEventListener("click", function() {
    sortirValiseInterieur();
    
  });
  retourValise.addEventListener("keypress", function(e) {
      if (e.key === 'Enter') {
        translaterValise();
    } 
  });
 } 
 else if (retourValiseDetail != null) {
    retourValiseDetail.addEventListener("click", function() {
    translaterValise();
    
  });
  retourValise.addEventListener("keypress", function(e) {
      if (e.key === 'Enter') {
        translaterValise();
    } 
  });
 } 
  }


document.addEventListener("DOMContentLoaded", function() {
  eventListeners();
});