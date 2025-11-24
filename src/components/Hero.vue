<template>
  <section id="beranda" class="hero-gradient pt-24 pb-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="text-white">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Solusi Lengkap untuk <span class="text-green-200">Pertanian Anda</span>
          </h1>
          <p class="text-xl mb-8 text-green-50">Distributor resmi pupuk bersubsidi dan obat-obatan pertanian berkualitas tinggi untuk hasil panen maksimal</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#produk" class="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition duration-300 text-center shadow-xl">
              <i class="fas fa-shopping-cart mr-2"></i>Lihat Produk
            </a>
            <a href="#kontak" class="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition duration-300 text-center">
              <i class="fas fa-phone mr-2"></i>Hubungi Kami
            </a>
          </div>

          <div class="grid grid-cols-3 gap-4 mt-12">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-3xl font-bold text-white">{{ stat.value }}</div>
              <div class="text-green-100 text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <div class="hidden md:block floating">
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=600&fit=crop" alt="Pertanian" class="rounded-2xl shadow-2xl">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Stat = { value: string; label: string }
const props = defineProps<{ stats: Stat[] }>()
</script>
