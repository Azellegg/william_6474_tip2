// Lenght
const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

rl.question("Masukan sebuah kalimat : ", (text) => {
     // Gunakan method toupperCase untuk mengubah kalimat menjadi huruf besar
     const textupperCase = text.toUpperCase();
     console.log(`Kalimat dalam huruf besar : ${textupperCase}`);
     rl.close();
})