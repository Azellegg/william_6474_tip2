// Lenght
const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

rl.question("Masukan sebuah kalimat : ", (kalimat) => {
     rl.question("Masukan kata yang ingin anda cari : ", (search) =>{
          /// Gunakan method indexOf untuk mencari kata search dalam kalimat
          const indexkata = kalimat.indexOf(search);
          if (indexkata !== -1) {
               console.log(`Kata '${search}' ditemukan pada indeks : ${indexkata}`) 
          } else {
               console.log(`Kata'${search}' tidak ditemukan dalam kalimat.`);
          }
          rl.close();
     })
})