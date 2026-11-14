// Disini kita akan lebih mendalami tentang Function
console.log('========== Function ==========');
console.log(`function sapa() {
console.log('hello')
}\n`)
console.log(`Ada bagian function. \nBagian 'function' dinamakan 'Function Keyword' \nBagian 'sapa()' dinamakan function 'Identifier' \nBagian yang ada di dalamnya dinamakan 'Function Body\n`)
// Function adalah blok kode yang dirancang untuk melakukan tugas tertentu dan dapat dipanggil berulang kali dalam program.
// intinya sebuah mesin yang bisa dipanggil berulang
// Contohnya seperti rumus matematika, dan lain lain
// Berikut adalah contoh rumus matematika
// Kita bakal ambil Lingkaran dan Pytagoras
console.log('========== Rumus Luas Lingkaran ==========');
function circleArea(r) {
    if (r % 7 === 0) {
        const Area = 22 / 7 * r ** 2;
        console.log(`Dengan jari-jari bernilai ${r}, luasnya adalah ${Area}`);
    } else {
        const Area = 3.14 * r ** 2;
        console.log(`Dengan jari-jari bernilai ${r}, luasnya adalah ${Area}`);
    }
}

circleArea(15);
circleArea(49);
circleArea(20);

console.log(`\n========== Rumus Pytagoras ==========`);
function pytagoreanTheorem(a, b, c) {
    if (a == null) {
        let a = c**2 - b**2;
        a = a ** 0.5;
        console.log(`\nb = ${b} \nc = ${c} \na = ${a}`);
    } else if (b == null) {
        let b = c**2 - a**2;
        b = b**0.5;
        console.log(`\na = ${a} \nc = ${c} \nb = ${b}`);
    } else {
        let c = a**2 + b**2;
        c = c**0.5;
        console.log(`\na = ${a} \nb = ${b} \nc + ${c}`);
    }
}

pytagoreanTheorem(null, 4, 5);
pytagoreanTheorem(5, null, 13);
pytagoreanTheorem(7, 24, null);

// Function Expression
// Function expression terdiri dari dua kata, yaitu "function" dan "expression". Kita sudah mengenal function, begitu juga dengan expression.
// Lantas, function expression dapat kita artikan sebagai kode yang mengembalikan nilai function.
console.log(`\n========== Function Expression Sekaligus Return Value ==========`);
const squareArea = function (s) {
    return s**2;
}

const SqAreaHasil = squareArea(57);
console.log('Hasilnya adakah', SqAreaHasil);

// Arrow Function{}
// Beuhhh, arrow function itu sangat simple
console.log(`\n========== Arrow Function ==========`);
const rectangleArea = (p, l) => {
    return p*l;
}

const rectAreaHasil = rectangleArea(23, 17);
console.log('hasilnya adalah', rectAreaHasil);

const experimentKali = rectAreaHasil * 4 / 2 ** 3;
console.log(`\nhasilnya adalah`, experimentKali);

// Ada yang lebih singkat, tapi pastinya untuk 1 hasil aja kalo yang ini
console.log(`\n========== Versi Lebih Singkat dari Arrow Function ==========`);
const tambahAngka = 
    (a, b) => a + b;

const hasilnya = tambahAngka(176, 321);
console.log('Hasilnya adalah', hasilnya);
