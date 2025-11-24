<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Testimoni Pelanggan</h2>
        <p class="text-xl text-gray-600">Kepercayaan petani adalah prioritas kami</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="t in testimonials" :key="t.name" class="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg">
          <div class="flex items-center mb-4">
            <img :src="t.avatar" :alt="t.name" class="w-16 h-16 rounded-full object-cover mr-4">
            <div>
              <h4 class="font-bold text-gray-800">{{ t.name }}</h4>
              <p class="text-gray-600 text-sm">{{ t.location }}</p>
            </div>
          </div>
          <div class="flex mb-4">
            <i v-for="n in 5" :key="n" class="fas fa-star text-yellow-400"></i>
          </div>
          <p class="text-gray-700 italic">"{{ t.text }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Testimonial = { name: string; location: string; avatar: string; text: string }
const props = defineProps<{ testimonials: Testimonial[] }>()
</script>
