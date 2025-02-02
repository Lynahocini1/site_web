function calcul(){
    var taille = +document.getElementById('taille').value
    var masse = +document.getElementById('masse').value

    var IMC = masse / ((taille / 100) * (taille / 100));

    var commentaire = ""
    console.log(`Voici la taille: ${taille}`)
    console.log(`Voici la masse: ${masse}`)
    console.log(IMC)

    if(IMC<18){
        commentaire = "sous-poids"
    } else if(IMC > 25){
        commentaire = "surpoids"
    } else {
        commentaire = "poids normal"
    }

    var section_résultat = document.getElementById('résultats')
    section_résultat.textContent = `Votre IMC est de ${IMC.toFixed(1)}. Vous êtes en ${commentaire}`;

}


document.getElementById('taille').addEventListener('click',nouveau_calcul())

var mesure_poids = document.getElementById('masse')
mesure_poids.addEventListener('input',nouveau_calcul);

var mesure_taille = document.getElementById('taille');
mesure_taille.addEventListener('input', nouveau_calcul);

function nouveau_calcul (){

    var taille = document.getElementById('taille').value
    var masse = document.getElementById('masse').value

    var IMC = masse / taille**2
    var commentaire = ""

    // Section pour déterminer le commentaire à ajouter à l'IMC
    if(!Number.isNaN(IMC) & IMC > 0 & IMC != Infinity){
        if (IMC<18){
        commentaire = "sous-poids"
        } else if(IMC > 25){
        commentaire = "surpoids"

        } else {
        commentaire = "poids normal"
        }

        var section_résultat = document.getElementById('résultat')
        section_résultat.textContent = `Votre IMC est de $ {IMC.toFixed(1)}. Vous êtes en ${commentaire}`;
    } else if(taille === "" || masse === ""){
    var section_résultat = document.getElementById('résultat')
    section_résultat.textContent = ``
    }

} 






