// Lenght
const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

rl.question("Masukkan kalimat pertama : ", (prikalimat) => {
     rl.question("Masukan kalimat kedua : ", (seckalimat) => {
          // Menggabukan prikalimat dan seckalimat menggunakan method concat()
          const combine = prikalimat.concat(seckalimat);
          console.log(`Hasil Penggabungan : ${combine}`);
          rl.close();
     })
})