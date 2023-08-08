// Lenght
const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

rl.question("Masukan sebuah kalimat : ", (text) => {
     // Gunakan method trim untuk menghapus spasi di awal
     const textTrimmed = text.trim();
     console.log(`Kalimat setelah di Trim : ${textTrimmed}`);
     rl.close();
})