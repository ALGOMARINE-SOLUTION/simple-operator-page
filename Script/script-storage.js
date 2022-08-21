function tambahBuku() {
  const tittleInput = document.getElementById("tittle");
  const authorInput = document.getElementById("author");

  const response = hitApiWithPostMethod("https://simple-express-server-algo.herokuapp.com/perpustakaan/tambah-buku", {
    tittle: tittleInput.value,
    author: authorInput.value,
  });
  response.then((responseApi) => {
    window.location.assign("https://algomarinesolution.com/id/");
  });
}
