// File: /Database/data.js

const STORAGE_KEY = "produk";

// Ambil data dari localStorage
function loadProdukList() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Simpan data ke localStorage
function saveProdukList(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Ambil semua produk yang tidak dihapus
function getProduk() {
  let produkList = loadProdukList();

  // Jika kosong, isi dengan data awal
  if (produkList.length === 0) {
    const dataAwal = [

      
      
    ];

    produkList = dataAwal;
    saveProdukList(produkList);
  }

  return produkList.filter(p => !p.dihapus); // hanya produk aktif
}
