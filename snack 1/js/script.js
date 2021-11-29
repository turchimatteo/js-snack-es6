/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM
*/

const bici = 
[
    {
        nome: 'Decathlon',
        peso: 8
    },
    {
        nome: 'Rossi',
        peso: 6
    },
    {
        nome: 'Ducati',
        peso: 10
    },
]
let biciLeggera = bici[0];
for (let i = 0; i < bici.length; i++) {
    const biciSelected = bici[i];
    console.log(biciSelected);
    if (biciSelected.peso < biciLeggera.peso) {
        biciLeggera = biciSelected;
    }
}
console.log(biciLeggera);
const {nome, peso} = biciLeggera;
const stampaBiciLeggera = `
<h1>La bici più leggera pesa ${peso} kg e si chiama ${nome}</h1>
`;
document.getElementById('bici-da-stampare').innerHTML = stampaBiciLeggera;



