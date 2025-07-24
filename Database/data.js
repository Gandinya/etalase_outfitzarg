// data.js

const STORAGE_KEY = "produkList";

// Ambil produk dari localStorage
function getProduk() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Simpan produk ke localStorage
function simpanProduk(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Tambah produk baru
function tambahProduk(item) {
  const produk = getProduk();
  produk.push(item);
  simpanProduk(produk);
}

// Update/edit produk di index tertentu
function updateProduk(index, itemBaru) {
  const produk = getProduk();
  if (index >= 0 && index < produk.length) {
    produk[index] = itemBaru;
    simpanProduk(produk);
  }
}

// Hapus produk berdasarkan index
function hapusProduk(index) {
  const produk = getProduk();
  if (index >= 0 && index < produk.length) {
    produk.splice(index, 1);
    simpanProduk(produk);
  }
}
