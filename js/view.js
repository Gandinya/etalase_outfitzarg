const container = document.getElementById("produk-container")

if (container) renderProduk()

function renderProduk() {
  container.innerHTML = ""
  const produkAktif = getProduk()
  if (produkAktif.length === 0) {
    container.innerHTML = `<p class="text-gray-600">Belum ada produk ditambahkan.</p>`
    return
  }

  produkAktif.forEach((item, i) => {
    const card = document.createElement("div")
    card.className = "bg-white rounded-xl shadow p-4"

    card.innerHTML = `
      <a href="${item.link}">
        <video class="w-full h-auto rounded-t-xl" autoplay muted loop playsinline>
          <source src="/video/${item.video}" type="video/mp4" />
        </video>
        <div class="p-3 text-center">
          <p class="font-medium text-gray-700">${item.nama}</p>
          <div class="flex justify-center items-center gap-2 mt-1 text-gray-600">
            <i class="fa-solid fa-tags text-orange-500"></i>
            <span class="text-base font-medium">Rp${item.harga.toLocaleString()}</span>
          </div>
        </div>
      </a>
    `
    container.appendChild(card)
  })
}
