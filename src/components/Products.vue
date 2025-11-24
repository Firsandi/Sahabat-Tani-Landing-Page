<template>
  <section id="produk" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Produk Unggulan Kami</h2>
        <p class="text-xl text-gray-600">Pilihan terbaik untuk kebutuhan pertanian Anda</p>
      </div>

      <div class="flex justify-center mb-12 gap-4 flex-wrap">
        <button v-for="category in categories" :key="category" @click="selectedCategory = category"
                :class="selectedCategory === category ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-green-50'"
                class="px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md">
          {{ category }}
        </button>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="relative">
            <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover">
            <span class="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">{{ product.category }}</span>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">{{ product.name }}</h3>
            <p class="text-gray-600 mb-4">{{ product.description }}</p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-green-600">{{ product.price }}</span>
              <button @click="onOrder(product)" class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                <i class="fas fa-shopping-cart mr-2"></i>Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
type Product = { id: number; name: string; category: string; description: string; price: string; image: string }
const props = defineProps<{ products: Product[]; categories: string[] }>()
const selectedCategory = ref('Semua Produk')

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'Semua Produk') return props.products
  return props.products.filter(p => p.category === selectedCategory.value)
})

function onOrder(product: Product) {
  const text = `Halo Sahabat Tani, saya ingin memesan: ${product.name} (${product.price})`
  const wa = `https://wa.me/6282151160513?text=${encodeURIComponent(text)}`
  window.open(wa, '_blank')
}
</script>
