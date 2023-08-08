// Lenght
const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});
rl.question("Masukan sebuah text : ", (text) => {
     rl.question("Masukan indeks awal : ", (startIndex) => {
          rl.question("Masukan indeks akhir : ", (endIndex) => {
               // Konversi nilai indeks ke tipe number 
               startIndex = Number(startIndex);
               endIndex = Number(endIndex);
               // Gunakan method slice untuk mengambil substring dari startIndex hingga endIndex
               const sliceSubstring = text.slice(startIndex, endIndex);
               console.log(`Hasil slice dari indeks ${startIndex} hingga ${endIndex} : ${sliceSubstring}`);
               rl.close();
          })
     })
})