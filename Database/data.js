// File: /Database/data.js

const STORAGE_KEY = "produkListZarg"

let produkList = loadProdukList()

function loadProdukList() {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

function saveProdukList(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function getProduk() {
  return produkList.filter(p => !p.dihapus)
}

function getSampah() {
  return produkList.filter(p => p.dihapus)
}

function tambahProduk(produk) {
  produk.dihapus = false
  produkList.push(produk)
  saveProdukList(produkList)
}

function updateProduk(index, produkBaru) {
  produkBaru.dihapus = produkList[index].dihapus
  produkList[index] = produkBaru
  saveProdukList(produkList)
}

function hapusProduk(index) {
  produkList[index].dihapus = true
  saveProdukList(produkList)
}

function pulihkanProduk(indexSampah) {
  const sampah = getSampah()
  const produk = sampah[indexSampah]
  const indexAsli = produkList.findIndex(p => p === produk)
  if (indexAsli !== -1) {
    produkList[indexAsli].dihapus = false
    saveProdukList(produkList)
  }
}

function hapusPermanent(indexSampah) {
  const sampah = getSampah()
  const produk = sampah[indexSampah]
  const indexAsli = produkList.findIndex(p => p === produk)
  if (indexAsli !== -1) {
    produkList.splice(indexAsli, 1)
    saveProdukList(produkList)
  }
}

function getProdukAsliIndex(produkAktifIndex) {
  const aktif = getProduk()
  const produk = aktif[produkAktifIndex]
  return produkList.findIndex(p => p === produk)
}

function getProdukByIndexAktif(i) {
  return getProduk()[i]
}


// Tambah produk awal jika kosong
if (produkList.length === 0) {
  produkList = [
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
  saveProdukList(produkList)
}
