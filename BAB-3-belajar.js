function space() {
    console.log('')
}

// Jadi di Bab 3 kita akan belajar tentang object
// Yaaaa, intinya cara mengelola object dan properti lahhh
console.log('========== Menstrukturkan Data dan Object ==========');
const dataKu = {
    nama : 'Dika',
    umur : 16,
    kelas : 11,
    ktp : false,
    tinggi : '170CM',
}

// DENGAN DOT NOTATION
console.log(dataKu.nama);
console.log(dataKu.umur);

// DENGAN SQUARE BRACKET
console.log(dataKu['kelas']);
console.log(dataKu['tinggi']);

// DENGAN DESTRUCTURING
const { nama, umur, kelas } = dataKu;
console.log(`Halo, nama ku ${nama}. Aku umur ${umur} tahun dan udah kelas ${kelas}.`);

// MENGUBAH DAN MENGHAPUS PROPERTI 
dataKu.nama = 'Draakaa';
console.log(dataKu.nama);
delete dataKu.ktp;
console.log(dataKu.ktp);

// KARENA BERHUBUNGAN DENGAN DATA
// KITA TIDAK BISA LEPAS DARI YANG NAMANYA ARRAY
console.log('\n========== Array ==========');

// ADA BEBERAPA CARA MEMBUAT ARRAY
// CARA 1 
const listNama = new Array('Dika', 'Jane');
console.log(listNama);
const aArray = new Array(5);
console.log(aArray);
space();

// CARA 2
const jurusan = ['Perhotelan', 'ATPH', 'APHP', 'LPKC'];
const bArray = Array.from(jurusan);
console.log(bArray);
space();

// CARA 3
// LANGSUNG MENYATAKAN ARRAY SECARA LITERAL
const mapel = ['Emteka', 'KIK', 'Bahasa Jepang', 'Housekeeping', 'Front Office', 'Food and Beverage'];
console.log(mapel);
space();

// CARA MEGAKSES ELEMEN ARRAY DAN BEBERAPA METHOD   
console.log('\n========== Mengakses Array dan Mengenal Beberapa Method untuk Memanipulasi Array ==========');

// MENGAKSES ARRAY 
const namaPlanet = ['Bumi', 'Merkurius', 'Jupiter', 'Saturnus'];
console.log(`Data saat ini ${namaPlanet}`);
console.log(namaPlanet[2]);
space();

// MENGGUNAKAN INDEXING
namaPlanet[1] = 'Uranus';
console.log(namaPlanet);
space();

// MENGGUNAKAN PUSH
namaPlanet.push('Merkurius');
console.log(namaPlanet);
space();

// MENGHAPUS DATA ARRAY
// MENGGUNAKAN DELETE
delete namaPlanet[2];
console.log(namaPlanet);
space();

// MENGGUNAKAN SPLICE
namaPlanet.splice(0, 1);
console.log(namaPlanet);
space();

// SHIFT DAN POP
namaPlanet.shift();
console.log(namaPlanet);
space();

namaPlanet.pop();
console.log(namaPlanet);
space();



