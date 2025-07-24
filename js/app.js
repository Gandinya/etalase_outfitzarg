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
       <a href="/CRUD/edit.html?index=${i}" class="bg-yellow-400 px-3 py-1 rounded text-sm">Edit</a>
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
