function perhitunganPersegiPanjang() {
    const panjangInput = document.getElementById('panjang');
    const lebarInput = document.getElementById('lebar');
    const luasPerPanTxt = document.getElementById('luasPerPan');
    const kelilingPerPanTxt = document.getElementById('kelPerPan');

    const panjang = panjangInput.value
    const lebar = lebarInput.value
    
    const luasPerPan = panjang * lebar
    const kelilingPerPan = (2*panjang) + (2*lebar)

    luasPerPanTxt.innerText = luasPerPan
    kelilingPerPanTxt.innerText = kelilingPerPan
}