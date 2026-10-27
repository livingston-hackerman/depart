// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.

const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depensesSemaine) {
  return depensesSemaine.reduce((cumul, p) => cumul + p, 0)
} 
// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depensesSemaine) {
  if (depensesSemaine.length === 0) {
    return 0
  }
  const total = calculerTotal(depensesSemaine)
  return total / depensesSemaine.length
}

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depensesSemaine) {
  return depensesSemaine.filter(montant => montant > 2000)
}
// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depensesSemaine) {
  if (depensesSemaine.length === 0) {
    return 0
  }
  return Math.max(...depensesSemaine)
  // Votre code ici.
}

const depenses = calculerTotal(depensesSemaine)
console.log(`depense total est ${depenses} FCFA`);

const moyenne = calculerMoyenne(depensesSemaine)
console.log(`la moyenne est ${moyenne} FCFA`)

const grossesDepenses = filtrerGrossesDepenses(depensesSemaine)
console.log(`les plus grosses depenses de la semaine sont ${grossesDepenses} FCFA`)

const grosseDepense = trouverMaximum(depensesSemaine)
console.log(`la plus grosse depenses est ${grosseDepense} FCFA`)


// TODO 5 : créer une copie triée, puis afficher le rapport demandé.
console.log("TODO : complétez l’analyse des dépenses.");
