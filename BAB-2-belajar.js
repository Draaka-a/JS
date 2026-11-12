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
