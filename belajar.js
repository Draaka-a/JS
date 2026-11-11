// Halo semua, ini hari pertama belajar JavaScript
const Space = ` `
const myName = 'Dika Mahendra';
const myAge = 16;
console.log(`Hello, my name is ${myName}, and am ${myAge} yo`);
console.log(' ');
/* Jadi ini adalah salah satu dari dua komentar
Bagus kan? */

// beda let dan const
let level = 16;
console.log(`ur current level is ${level}`);
level = 17; // bisa
console.log(`now ur level ${level}`);

const namaKu = 'Dika';
console.log(`Hello, my name ${namaKu}`);
// namaKu = 'Elon Musk'; // Type error
console.log(`but my name can't be ${namaKu}`);
console.log(' ');

// Belajar scope variable sekaligus function tipis tipis
function NamaKu() {
    let name = 'Dika';
    let umur = 16;
    console.log(`Nama ku ${name}, dan aku berumur ${umur} tahun`);
    console.log(' '); // Space
}

function NamaTeman() {
    let name = 'Mahendra';
    let umur = 18;
    console.log(`Halo, nama ku ${name}, aku berumur ${umur} tahun. Aku temen Dika`); // harusnya bisa
}

NamaKu()
NamaTeman()

// beberapa method
const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());

// tipe data 
console.log('\nSekarang belajar tipe data');
// String
console.log('ini adalah string: "String"\n');

// Number (di JS bukan Integer, tapi Number)
const firstNumber = 67;
const secNumber = 0;
const sumResult = firstNumber/secNumber;
console.log(sumResult); // Infinity

// ini boolean
// di boolean hanya ada true dan false
console.log(Space);
const akuGanteng = true;
const akuCewe = false;

console.log(`Aku Ganteng? ${akuGanteng}`);
console.log(`Aku femboy? ${akuCewe}`);
console.log(Space);

// Oke, hari ini belajar tentang casting
// jadi di Js casting suatu variable berbeda dengan di Py
// Bedanya apa? let's check it out

// Ini adalah cara casting ke tipe data string
// Ada 2 cara berbeda
const tahun = 2026;
const bulanNovember = true;

const castedInt = String(tahun); // Menggunakan String()
const castedBool = bulanNovember.toString(); // Menggunakan .toString()

console.log('========== String Casting ==========');
console.log(castedInt);
console.log(castedBool);
console.log(Space);

// Ini casting ke Number
// kali ini di Number ada 3 cara yang bisa dipakai
const Age = '16yo';
const Grade = '12';
const Height = '1,72m';
const Live = true;

const castedAge = parseInt(Age);
const castedGrade = Number(Grade);
const castedHeight = parseFloat(Height);
const castedStatus = Number(Live);

console.log('========== Number Casting ==========');
console.log(castedAge);
console.log(castedGrade);
console.log(castedHeight);
console.log(castedStatus);
console.log(Space);

// Ini boolean
// Boolean mah chill guy, dia cuma ada satu
const empty = null;
const booledAge = Boolean(Age);
const booledEmpty = Boolean(empty);

console.log('========== Boolean Casting ==========');
console.log(booledAge);
console.log(booledEmpty);
console.log(Space);

// Selain itu ada juga Implisit Casting
// Maksudnya gimana? apa beda nya dengan yang di atas?
// Jadi Implisit Casting itu adalah proses saat Js meng-casting tanpa instruksi kita
// Misalnya
const angka = '67';
const hasil = angka*2;

console.log('========== Implisit Casting ==========');
console.log(`Jika di Py, hasil dari '67' adalah '6767'. tetapi di Js?`);
console.log(`hasilnya adalah ${hasil}`);
console.log('Lihat? walaupun awalnya ditulis dengan string, tetapi Js memproses layaknya Number');

// Operation
// Pada pembelajaran Operasi kita engga belajar kedokteran/ tapi Operasi yang di maksud adalah Operasi matematika
// Ada 2 nama yang harus diketahui dalam Operation karena sangat penting
console.log(Space);
console.log('========== Operasi ==========');

const num1 = 67;
const num2 = 38;
const operasi = '-'
const hasill = num1 - num2;

console.log(`Nomor pertama = ${num1} \nNomor kedua = ${num2} \nSimbol yang akan digunakan adalah '${operasi}' \n`);
console.log(`hasil dari ${num1} - ${num2} = ${hasill}`);
console.log(`\n${num1} dan ${num2} dalam operasi disebut dengan Operand. \nSedangkan Simbol nya yaitu '${operasi}', itu disebut dengan Operator \n`);

// Terdapat 3 macam Operasi yang harus diketahui
console.log(`========== Jenis-Jenis Operasi ==========`);

const num3 = 45;
const num4 = 32;

// Unary
console.log('Yang termasuk Unary salah satu nya adalah penggunaan `typeof`')
const Un1 = typeof num3;
const Un2 = typeof num4;

console.log(Un1);
console.log(Un2);
console.log(Space);

// Binary
function BinaryFunc(a, b) {
    console.log('Binary, artinya ada 2 Operand yang digunakan');
    console.log(`Misalnya \n${a} + ${b} = ${a + b}`);
}

BinaryFunc(num3, num4);
console.log(Space);

function ternaryFunc(c) {
    const ternary = (c == 67) ? '67!!!!!!!!!!' : 'you are not 67';
    console.log(ternary);
}

ternaryFunc(num3);
ternaryFunc(num1);
