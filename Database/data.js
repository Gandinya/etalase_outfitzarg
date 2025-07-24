const STORAGE_KEY = "produkList";

// Ambil data dari localStorage, jika belum ada gunakan data default
let produkList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
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
];

// Simpan ke localStorage
function simpanKeStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(produkList));
}

// Ambil seluruh data produk
function getProduk() {
  return produkList;
}

// Tambah produk baru
function tambahProduk(produk) {
  produkList.push(produk);
  simpanKeStorage();
}

// Perbarui produk berdasarkan index
function updateProduk(index, produkBaru) {
  produkList[index] = produkBaru;
  simpanKeStorage();
}

// Hapus produk
function hapusProduk(index) {
  produkList.splice(index, 1);
  simpanKeStorage();
}
