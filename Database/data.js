let produkList = [
  {
    nama: "Celana Baggy wanita",
    harga: 146850,
    video: "OUTFIT BAGGY.mp4",
    dihapus: false
  },
  {
    nama: "Celana Baggy Pria",
    harga: 155900,
    video: "Celana Baggy Pria.mp4",
    dihapus: false
  },
  {
    nama: "Kemeja Fit Body Wanita",
    harga: 68400,
    video: "KemejaCeweFitBody.mp4",
    dihapus: false
  }
]

function getProduk() {
  return produkList.filter(p => !p.dihapus)
}

function getSampah() {
  return produkList.filter(p => p.dihapus)
}

function tambahProduk(produk) {
  produk.dihapus = false
  produkList.push(produk)
}

function updateProduk(index, produkBaru) {
  produkBaru.dihapus = produkList[index].dihapus
  produkList[index] = produkBaru
}

function hapusProduk(index) {
  produkList[index].dihapus = true
}

function pulihkanProduk(index) {
  getSampah()[index].dihapus = false
}

function hapusPermanent(index) {
  const indexAsli = produkList.findIndex((p, i) => p.dihapus && i === index)
  if (indexAsli !== -1) produkList.splice(indexAsli, 1)
}
