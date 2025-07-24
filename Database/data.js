let produkList = [
  {
    nama: "Celana Baggy wanita",
    harga: 146850,
    video: "OUTFIT BAGGY.mp4"
  },
  {
    nama: "Celana Baggy Pria",
    harga: 155900,
    video: "Celana Baggy Pria.mp4"
  },
  {
    nama: "Kemeja Fit Body Wanita",
    harga: 68400,
    video: "KemejaCeweFitBody.mp4"
  }
]

function getProduk() {
  return produkList
}

function tambahProduk(produk) {
  produkList.push(produk)
}

function updateProduk(index, produkBaru) {
  produkList[index] = produkBaru
}

function hapusProduk(index) {
  produkList.splice(index, 1)
}
