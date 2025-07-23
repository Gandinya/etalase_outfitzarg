// app.js
const container = document.getElementById("produk-container")
const form = document.getElementById("produk-form")

let editIndex = null

function renderProduk() {
  container.innerHTML = ""
  getProduk().forEach((item, i) => {
    const card = document.createElement("div")
    card.className = "bg-white rounded-lg shadow-md p-4 w-64"

    card.innerHTML = `
      <video controls class="mb-2 rounded-md">
        <source src="video/${item.video}" type="video/mp4">
        Your browser does not support video.
      </video>
      <h3 class="font-bold text-lg">${item.nama}</h3>
      <p class="text-orange-600 font-semibold">Rp${item.harga.toLocaleString()}</p>
      <div class="mt-2 space-x-2">
        <button onclick="editProduk(${i})" class="bg-yellow-400 px-2 py-1 rounded">Edit</button>
        <button onclick="hapusProdukHandler(${i})" class="bg-red-500 text-white px-2 py-1 rounded">Hapus</button>
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

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const nama = form.nama.value.trim()
  const harga = parseInt(form.harga.value)
  const video = form.video.value.trim()

  if (editIndex === null) {
    tambahProduk({ nama, harga, video })
  } else {
    updateProduk(editIndex, { nama, harga, video })
    editIndex = null
  }

  form.reset()
  renderProduk()
})

function editProduk(index) {
  const item = getProduk()[index]
  form.nama.value = item.nama
  form.harga.value = item.harga
  form.video.value = item.video
  editIndex = index
}

renderProduk()
