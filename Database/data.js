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

let produkList = loadProdukList()

if (produkList.length === 0) {
  const dataAwal = [
    {
      nama: "Celana Cargo Baggy Wanita",
      harga: 146850,
      video: "OUTFIT BAGGY.mp4",
      link: "https://s.shopee.co.id/9zmy31XSGD",
      dihapus: false
    },
    {
      nama: "Workshirt Cutting Boxy Pria",
      harga: 197500,
      video: "Workshirt Boxy.mp4",
      link: "https://s.shopee.co.id/4ApBKfHkUy",
      dihapus: false
    },
    {
      nama: "Kemeja Fit Body Wanita",
      harga: 68400,
      video: "KemejaCeweFitBody.mp4",
      link: "https://s.shopee.co.id/8ALKJ88hGX",
      dihapus: false
    },
    {
      nama: "Hangover - WOLLARD - Kaos Lengan Pendek Pria & Wanita",
      harga: 75000,
      video: "Hangover - WOLLARD.mp4",
      link: "https://s.shopee.co.id/8pb8qWE95N",
      dihapus: false
    },
    {
      nama: "Hangover - HGVR 2.0 - Kaos Lengan Pendek Pria & Wanita",
      harga: 75000,
      video: "HGVR 2.0.mp4",
      link: "https://s.shopee.co.id/8KesFklkU5",
      dihapus: false
    },
    {
      nama: "Hangover - SALAZAR - Kaos Lengan Pendek Pria & Wanita",
      harga: 75000,
      video: "RIDDLE.mp4",
      link: "https://s.shopee.co.id/AUjMpz0nO3",
      dihapus: false
    },
  ]
  produkList = dataAwal
  saveProdukList(produkList)
}
