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
      {
        nama: "Celana Cargo Baggy Wanita",
        harga: 146850,
        video: "harajuku.jpg",
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
      
    ];

    produkList = dataAwal;
    saveProdukList(produkList);
  }

  return produkList.filter(p => !p.dihapus); // hanya produk aktif
}
