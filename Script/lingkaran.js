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

function HitungKelilingDanLuasLingkaranDgDataBackEnd() {
  // 1. Mendefinisikan tag yang akan digunakan utk perhitungan
  const radiusInput = document.getElementById("radius");
  const luas = document.getElementById("Luas_Lingkaran");
  const keliling = document.getElementById("Keliling_Lingkaran");

  // 2. hit api BE-nya untuk menghitung Lingkaran
  const response = hitApiWithPostMethod("https://simple-express-server-algo.herokuapp.com/bangun-datar/lingkaran", { radius: parseInt(radiusInput.value) });
  response.then(function (responseApi) {
    console.log(responseApi);
    // 3. masukan hasil perhitungannya ke dalam element Text
    luas.innerText = responseApi.data.luas;
    keliling.innerText = responseApi.data.keliling;
  });
}
