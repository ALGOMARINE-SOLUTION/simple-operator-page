function hitungLuasKelilingLingkaran() {
  // 1. Mendefinisikan tag yang akan digunakan utk perhitungan
  const jariInput = document.getElementById("jari");
  const luasTxt = document.getElementById("Luas_Lingkaran");
  const kelilingTxt = document.getElementById("Keliling_Lingkaran");

  // 2. Membuat variabel untuk mendefinisikan parameter yang digunakan untuk perhitungan
  const jari = jariInput.value;

  // 3. Menghitung Luas
  const Luas_Lingkaran = 3.14 * jari * jari;

  // 4. Menghitung Keliling
  const Keliling_Lingkaran = 2 * 3.14 * jari;

  // 5. Memasukan hasilnya ke dalam tag text hasil
  luasTxt.innerText = Luas_Lingkaran;
  kelilingTxt.innerText = Keliling_Lingkaran;
}
