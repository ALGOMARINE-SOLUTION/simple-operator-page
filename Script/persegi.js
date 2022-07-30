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

function hitungLuasDanKelilingdenganAPI() {
  // 1. mendefinisikan tag yang akan digunakan
  const sisiInput = document.getElementById('sisi');
  const luasTxt = document.getElementById('luas');
  const kelilingTxt = document.getElementById('keliling');

  // 2. hit api BE-nya utk menghitung persegi
  const response = hitApiWithPostMethod(
    'https://simple-express-server-algo.herokuapp.com/bangun-datar/persegi',
    { sisi: parseInt(sisiInput.value) }
  );
  response.then((abc) => {
    // 3. masukan hasil perhitungannya ke dalam element text
    luasTxt.innerText = abc.data.luas
    kelilingTxt.innerText = abc.data.keliling
  })
}