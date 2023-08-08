// Lenght
const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

rl.question("Masukan sebuah kalimat : ", (text) => {
     // Gunakan method tolowerCase untuk mengubah kalimat menjadi huruf besar
     const tolowerCase = text.toLowerCase();
     console.log(`Kalimat dalam huruf kecil : ${tolowerCase}`);
     rl.close();
})