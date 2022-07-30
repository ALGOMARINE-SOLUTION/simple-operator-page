function hitungLuasDanKelilingSegitiga() {
  //1. mendefinisikan  tag yang akan digunakan
  const sisisInput = document.getElementById('sisis');
  const tinggisInput = document.getElementById('tinggis');
  const luassTxt = document.getElementById('luass');
  const kelilingsTxt = document.getElementById('kelilings');
  const btnhitung = document.getElementById('btn-hitung');

  //2. membuat variabel untuk mendefinisikan parameter yang digunakan utk perhitungan
  const sisis = sisisInput.value;
  const tinggis = tinggisInput.value;

  //3. menghitung luas
  const luass = 0.5 * sisis * tinggis;
  // console.log(luas);

  //4. hitung keliling
  const kelilings = 3 * sisis;
  // console.log('luas:', luas)
  // console.log('keliling', keliling)

  //5. masukan hasilnya ke dalam tag text hasil
  luassTxt.innerText = luass
  kelilingsTxt.innerText = kelilings
}