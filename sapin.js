//Initialisation
const space = ' ';
let width = 3;


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Demande utilisateur      
rl.question("Quelle est la hauteur du sapin ?\n => ", function generation(height) {  
    rl.close();

//Vérification de l'entrée
let key = parseInt(height);

if (key > 1) {
    if (key == 69) {console.log(`\n\u0028 \u0361\u00b0 \u035c\u0296 \u0361\u00b0\u0029 NOYCE !\n`)} else {

    console.log(`\nGénération d'un sapin de ${key} de haut...\n`);
    
    // Première ligne
console.log(`${space.repeat(key)}\u2730`)

// Génération des lignes suivantes
for (let tour = 1 ; tour < key ; tour++, width=width+2) {
    let line = Math.random() < 0.95 ? `*` : `\u25CD`;
    //Aléatoire des * ou O
    for (let i = 1 ; i < width ; i++){
    let random = Math.random();
    let soub = random < 0.95 ? `*` : `\u25CD`;
    line = line + soub;
    };
    console.log(`${space.repeat(key-tour-1)} ${line}`)}
    console.log(`\n HO HO HO ! QU'IL EST BEAU MON SAPIN !\n`);
    }
} else {
    console.log(`La hauteur doit être un NOMBRE supérieur à 1 !\n`);
    }
});