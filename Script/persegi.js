function hitungLuasDanKeliling() {
    // 1.mendefinisikan tag yang digunakan
    const sisiInput = document.getElementById('sisi');
    const luasTxt = document.getElementById('luas');
    const kelilingTxt = document.getElementById('keliling');
    const btnHitung = document.getElementById('btn-hitung');

    // 2. membuat variabel untuk mendefinisikan parameter yang digunakan untuk perhitungan
    const sisi = sisiInput.value

    // 3. menghitung luas
    const luas = sisi * sisi

    // 4. hitung keliling
    const keliling = 4 * sisi
    console.log ('luas', luas)
    console.log ('keliling', keliling)

    // 5. mauskan hasilnya ke dalam tag text hasil
    luasTxt.innerText = luas
    kelilingTxt.innerText = keliling

}