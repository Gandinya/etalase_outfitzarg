const container = document.getElementById("produk-container");

if (container) renderProduk();

function renderProduk() {
  container.innerHTML = "";
  const produkAktif = getProduk();

  if (produkAktif.length === 0) {
    container.innerHTML = `<p class="text-gray-600">Belum ada produk ditambahkan.</p>`;
    return;
  }

  produkAktif.forEach((item, i) => {
    const card = document.createElement("a");
    card.href = item.link; // Link ke Shopee
    card.target = "_blank"; // Buka di tab baru
    card.className = "block bg-white rounded-xl shadow p-4 hover:shadow-lg transition";

    card.innerHTML = `
      <video class="w-full h-auto rounded-md mb-2" autoplay muted loop playsinline>
        <source src="/video/${item.video}" type="video/mp4" />
        Browser tidak mendukung video.
      </video>
      <div class="text-center">
        <p class="font-semibold text-gray-800">${item.nama}</p>
        <div class="flex justify-center items-center gap-1 mt-1 text-gray-600">
          <i class="fa-solid fa-tags text-orange-500"></i>
          <span class="text-base font-medium">Rp${item.harga.toLocaleString()}</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}
