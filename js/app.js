const container = document.getElementById("produk-container")
// File: /Database/data.js

const STORAGE_KEY = "produkListZarg"

let produkList = loadProdukList()

function loadProdukList() {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

function saveProdukList(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function getProduk() {
  return produkList.filter(p => !p.dihapus)
}

function getSampah() {
  return produkList.filter(p => p.dihapus)
}

function tambahProduk(produk) {
  produk.dihapus = false
  produkList.push(produk)
  saveProdukList(produkList)
}

function updateProduk(index, produkBaru) {
  produkBaru.dihapus = produkList[index].dihapus
  produkList[index] = produkBaru
  saveProdukList(produkList)
}

function hapusProduk(index) {
  produkList[index].dihapus = true
  saveProdukList(produkList)
}

function pulihkanProduk(indexSampah) {
  const sampah = getSampah()
  const produk = sampah[indexSampah]
  const indexAsli = produkList.findIndex(p => p === produk)
  if (indexAsli !== -1) {
    produkList[indexAsli].dihapus = false
    saveProdukList(produkList)
  }
}

function hapusPermanent(indexSampah) {
  const sampah = getSampah()
  const produk = sampah[indexSampah]
  const indexAsli = produkList.findIndex(p => p === produk)
  if (indexAsli !== -1) {
    produkList.splice(indexAsli, 1)
    saveProdukList(produkList)
  }
}

function getProdukAsliIndex(produkAktifIndex) {
  const aktif = getProduk()
  const produk = aktif[produkAktifIndex]
  return produkList.findIndex(p => p === produk)
}

function getProdukByIndexAktif(i) {
  return getProduk()[i]
}

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
      <video class="w-full h-64 rounded-xl object-cover mb-2" autoplay muted loop playsinline>
        <source src="video/${item.video}" type="video/mp4" />
        Browser tidak mendukung video.
      </video>
      <h3 class="text-lg font-bold text-gray-800">${item.nama}</h3>
      <p class="text-orange-600 font-semibold mb-3">Rp${item.harga.toLocaleString()}</p>
      <div class="flex gap-2">
        <a href="/CRUD/edit.html?index=${i}" class="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded text-sm text-black">Edit</a>
        <button onclick="hapusProdukHandler(${i})" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">Hapus</button>
      </div>
    `
    container.appendChild(card)
  })
}

function hapusProdukHandler(indexAktif) {
  if (confirm("Yakin ingin menghapus produk ini?")) {
    const indexAsli = getProdukAsliIndex(indexAktif)
    if (indexAsli !== -1) {
      hapusProduk(indexAsli)
      renderProduk()
    } else {
      alert("Gagal menghapus produk.")
    }
  }
}
