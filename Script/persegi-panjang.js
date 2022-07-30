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

function perhitunganPersegiPanjangdenganAPI() {
    const panjangInput = document.getElementById('panjang');
    const lebarInput = document.getElementById('lebar');
    const luasPerPanTxt = document.getElementById('luasPerPan');
    const kelilingPerPanTxt = document.getElementById('kelPerPan');

    const response = hitApiWithPostMethod(
    'https://simple-express-server-algo.herokuapp.com/bangun-datar/persegi-panjang',
    { 
        panjang: parseInt(panjangInput.value), 
        lebar: parseInt(lebarInput.value)
    }
    );
    response.then((responseApi) => {
    luasPerPanTxt.innerText = responseApi.data.luas
    kelilingPerPanTxt.innerText = responseApi.data.keliling
    })
}
