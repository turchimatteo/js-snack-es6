/* 
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. 
*/
const squadre = [
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'West Ham',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Legia Varsavia',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Borussia Dortmund',
        puntiFatti: 0,
        falliSubiti: 0
    },
];
const squadreNewArray = [];
for(let i = 0; i < squadre.length; i++) {
    const squadraSelected = squadre[i];

    const randomFalliSubiti = getRndInteger(0, 100);
    const randomPuntiFatti = getRndInteger(0, 100);

    squadraSelected.puntiFatti = randomPuntiFatti;
    squadraSelected.falliSubiti = randomFalliSubiti;
    console.log(squadraSelected);

    const {nome, falliSubiti} = squadraSelected;

    const nuovaSquadra = {
        nome,
        falliSubiti
    };

    squadreNewArray.push(nuovaSquadra);
}
console.log(squadre);
console.log(squadreNewArray);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
} 