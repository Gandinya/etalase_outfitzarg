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
      nama: "Kaos Hangover",
      harga: 57000,
      video: "kaos-hangover.mp4",
      link: "https://shopee.co.id/kaos-hangover-original-123456",
      dihapus: false
    },
    {
      nama: "Kaos Zarg Urban",
      harga: 85000,
      gambar: "zarg-urban.jpg",
      link: "https://shopee.co.id/kaos-zarg-urban-987654",
      dihapus: false
    },
    {
      nama: "Kaos Basic Outfit",
      harga: 49000,
      video: "basic-outfit.mp4",
      link: "https://shopee.co.id/kaos-basic-outfit-246810",
      dihapus: false
    }
  ]
  saveProdukList(produkList)
}
