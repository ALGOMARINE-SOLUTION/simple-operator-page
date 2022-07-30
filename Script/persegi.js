function hitungLuasDanKeliling() {
  // 1. mendefinisikan tag yang akan digunakan
  const sisiInput = document.getElementById('sisi');
  const luasTxt = document.getElementById('luas');
  const kelilingTxt = document.getElementById('keliling');

  // 2. membuat variabel untuk mendefinisikan parameter yang digunakan utk perhitungan
  const sisi = sisiInput.value;

  // 3. menghitung luas
  const luas = sisi * sisi;
  
  // 4. hitung keliling
  const keliling = 4 * sisi
  
  // 5. masukan hasilnya ke dalam tag text hasil
  luasTxt.innerText = luas
  kelilingTxt.innerText = keliling
}

function hitungLuasDanKelilingDenganAPI() {
  // 1. mendefinisikan tag apa saja yang kita akan gunakan
  const sisiInput = document.getElementById('sisi');
  const luasTxt = document.getElementById('luas');
  const kelilingTxt = document.getElementById('keliling');

  // 2. hit api BE utk menghitung luas persegi

}