const container = document.getElementById("produk-container")
if (container) renderProduk()

function renderProduk() {
  container.innerHTML = ""
  getProduk().forEach((item, i) => {
    const card = document.createElement("div")
    card.className = "bg-white rounded shadow p-4"
    card.innerHTML = `
       <video class="w-full h-auto rounded-t-xl" autoplay muted loop playsinline>
        <source src="video/${item.video}" type="video/mp4" />
        Browser tidak mendukung video.
      </video>
      <h3 class="text-lg font-bold">${item.nama}</h3>
      <p class="text-orange-600 font-semibold">Rp${item.harga.toLocaleString()}</p>
      <div class="mt-2 flex gap-2">
        <a href="/CRUD/edit.html?index=${i}" class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        Edit
        </a>
        <button onclick="hapusProdukHandler(${i})" class="bg-red-500 text-white px-3 py-1 rounded text-sm">Hapus</button>
      </div>
    `
    container.appendChild(card)
  })
}

function hapusProdukHandler(index) {
  if (confirm("Yakin ingin menghapus produk ini?")) {
    hapusProduk(index)
    renderProduk()
  }
}
