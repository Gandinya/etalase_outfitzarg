function loadProdukList() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveProdukList(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getProduk() {
  let produkList = loadProdukList();

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
      {
        nama: "Hangover - PLEASURE - T-Shirt",
        harga: 75000,
        video: "PLEASURE.mp4",
        link: "https://s.shopee.co.id/8zuZCYRref",
        dihapus: false
      },
      {
        nama: "Hangover - NEIL - T-Shirt",
        harga: 75000,
        video: "NEIL.png",
        link: "https://s.shopee.co.id/7fPCt6mqui",
        dihapus: false
      },
      {
        nama: "Hangover - SLY - T-Shirt",
        harga: 75000,
        video: "SLY.mp4",
        link: "https://s.shopee.co.id/3AwnWovnJC",
        dihapus: false
      },
      {
        nama: "Hangover - NAVETTA  - T-Shirt",
        harga: 75000,
        video: "NAVETTA.mp4",
        link: "https://s.shopee.co.id/8ALTUqVEET",
        dihapus: false
      },
    ];
    produkList = dataAwal;
    saveProdukList(produkList);
  }

  return produkList.filter(p => !p.dihapus); // hanya tampilkan yang tidak dihapus
}
