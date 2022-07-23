console.log("terbaca");

function hitungLuasDanKeliling() {
  // 1. Mendefinisikan tag yang akan digunakan utk perhitungan
  const sisiInput = document.getElementById("sisi");
  const luasTxt = document.getElementById("luas");
  const kelilingTxt = document.getElementById("keliling");

  // 2. Membuat variabel untuk mendefinisikan parameter yang digunakan untuk perhitungan
  const sisi = sisiInput.value;

  // 3. Menghitung Luas
  const luas = sisi * sisi;

  // 4. Menghitung Keliling
  const keliling = 4 * sisi;

  // 5. Memasukan hasilnya ke dalam tag text hasil
  luasTxt.innerText = luas;
  kelilingTxt.innerText = keliling;
}
