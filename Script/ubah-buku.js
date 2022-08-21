function ubahBuku() {
    const namaInput = document.getElementById('nama');
    const pengarangInput = document.getElementById('pengarang');
    const urutanInput = document.getElementById('urutan');


    const response = hitApiWithPostMethod(
    'https://simple-express-server-algo.herokuapp.com/perpustakaan/ubah-buku',
    { 
        nama: namaInput.value,
        pengarang: pengarangInput.value,
        urutan: urutanInput.value
    }
    );
    
    response.then((responseApi) => {
      window.location.assign('https://google.com');

    })
}