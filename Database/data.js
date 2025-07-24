const STORAGE_KEY = "produkList"

function loadProdukList() {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

function saveProdukList(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

// Inisialisasi awal
let produkList = loadProdukList()

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

// Ambil data produk aktif
function getProduk() {
  return produkList.filter(p => !p.dihapus)
}

// Ambil data sampah
function getSampah() {
  return produkList.filter(p => p.dihapus)
}

// Tambah produk baru
function tambahProduk(produk) {
  produk.dihapus = false
  produkList.push(produk)
  saveProdukList(produkList)
}

// Update produk
function updateProduk(index, produkBaru) {
  produkBaru.dihapus = produkList[index].dihapus
  produkList[index] = produkBaru
  saveProdukList(produkList)
}

// Hapus ke trash (soft delete)
function hapusProduk(index) {
  produkList[index].dihapus = true
  saveProdukList(produkList)
}

// Pulihkan dari trash
function pulihkanProduk(indexSampah) {
  const sampah = getSampah()
  const produk = sampah[indexSampah]
  const indexAsli = produkList.findIndex(p => p === produk)
  if (indexAsli !== -1) {
    produkList[indexAsli].dihapus = false
    saveProdukList(produkList)
  }
}

// Hapus permanen dari trash
function hapusPermanent(indexSampah) {
  const sampah = getSampah()
  const produk = sampah[indexSampah]
  const indexAsli = produkList.findIndex(p => p === produk)
  if (indexAsli !== -1) {
    produkList.splice(indexAsli, 1)
    saveProdukList(produkList)
  }
}
