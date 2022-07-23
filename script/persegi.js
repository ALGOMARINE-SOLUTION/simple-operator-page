console.log('terbaca');

function hitungLuasDanKeliling() {
    //1. mendefinisikan  tag yang akan digunakan
    const sisiInput = document.getElementById('sisi');
    const luasTxt = document.getElementById('luas');
    const kelilingTxt = document.getElementById('keliling');
    const btnhitung = document.getElementById('btn-hitung');

    //2. membuat variabel untuk mendefinisikan parameter yang digunakan utk perhitungan
    const sisi = sisiInput.value;

    //3. menghitung luas
    const luas = sisi * sisi;
    // console.log(luas);

    //4. hitung keliling
    const keliling = 4 * sisi;
    // console.log('luas:', luas)
    // console.log('keliling', keliling)

    //5. masukan hasilnya ke dalam tag text hasil
    luasTxt.innerText = luas
    kelilingTxt.innerText = keliling
}