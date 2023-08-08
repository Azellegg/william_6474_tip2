// Lenght
const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

rl.question("Masukan sebuah kalimat : ", (text) => {
     rl.question("Masukan kata yang ingin anda cari : ", (search) => {
          // Gunakan method lasrindexOf untuk mencari search dalam kalimat
          const indexlasttext = text.lastIndexOf(search);
          if (indexlasttext !== -1) {
               console.log(`Kata '${search}' deitemukan pada indeks terakhir : ${indexlasttext}`);
               } else {
                    console.log(`Kata '${search}' tidak ditemukan dalam kalimat`);
               }
               rl.close();
     })   
})