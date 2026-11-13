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
pytagoreanTheorem(7, 24, null)
