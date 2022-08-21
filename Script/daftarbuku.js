function cariBukuDenganAPI(){  
    //2. hit API BE untuk menghitung luas segitiga
    const response = hitApiWithGetMethod(
      'https://simple-express-server-algo.herokuapp.com/perpustakaan/daftar-buku',
    );
    response.then((daftarBuku) => {
      console.log(daftarBuku);
    })
}
console.log(Array);
cariBukuDenganAPI();

//1. Mendefinisikan variabel html yang akan kita gunakan untuk modifikasi data html
        const tableBuku = document.getElementById('table-data');
        //2. Gunakan for loop untuk mengkonversi setiap elemen dalam variabel kumpulanBuah dari arrayjson menjadi HTML table
        for(let index = 0; index < Array.length; index++) {
            const data = Array[index];
            tableBuku.innerHTML = tableBuku.innerHTML + `
                <tr>
                    <td>${data.nama}</td>
                    <td>${data.pengarang}</td>
                </tr>
            `
        }