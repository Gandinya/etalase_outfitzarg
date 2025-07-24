// data.js

const STORAGE_KEY = "produkList";

// Ambil semua produk dari localStorage
function getProduk() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Simpan seluruh data produk ke localStorage
function simpanProduk(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Tambah 1 produk
function tambahProduk(item) {
  const produk = getProduk();
  produk.push(item);
  simpanProduk(produk);
}

// Perbarui 1 produk di index tertentu
function updateProduk(index, itemBaru) {
  const produk = getProduk();
  if (index >= 0 && index < produk.length) {
    produk[index] = itemBaru;
    simpanProduk(produk);
  }
}

// Hapus 1 produk berdasarkan index
function hapusProduk(index) {
  const produk = getProduk();
  if (index >= 0 && index < produk.length) {
    produk.splice(index, 1);
    simpanProduk(produk);
  }
}
