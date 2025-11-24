<template>
  <section id="layanan" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Mengapa Pilih <span class="gradient-text">Sahabat Tani</span>?</h2>
        <p class="text-xl text-gray-600">Komitmen kami untuk kesuksesan pertanian Anda</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="feature in features" :key="feature.title" class="feature-card bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <div class="feature-icon bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <i :class="feature.icon" class="text-white text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ feature.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Feature = { icon: string; title: string; description: string }
const props = defineProps<{ features: Feature[] }>()
</script>
