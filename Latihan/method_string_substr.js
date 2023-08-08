// Lenght
const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

rl.question("Masukan sebuah kalimat : ", (text) => {
     rl.question("Masukan indeks awal : ", (startIndex) => {
          rl.question("Masukan panjang SubString : ", (length) => {
               // Konversi nilai indeks dan panjang ke tipe Number
               startIndex = Number(startIndex);
               length = Number(length);
               // Gunakan method substr untuk mengambil substr dari startIndex dengan panjang length
               const substrResult = text.substr(startIndex, length);
               console.log(`Hasil SubString dari indeks ${startIndex} dengan panjang ${length} : ${substrResult}`);
               rl.close();
          })
     })
})