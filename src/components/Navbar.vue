<template>
  <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <img :src="logo" alt="Sahabat Tani" class="h-10 w-auto mr-3" />
          <span class="text-2xl font-bold text-gray-800">Sahabat Tani</span>
        </div>

        <div class="hidden md:flex space-x-8">
          <a v-for="item in navItems" :key="item.name" :href="item.href" class="text-gray-700 hover:text-green-600 font-medium transition duration-300">
            {{ item.name }}
          </a>
        </div>

        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-700">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="item in navItems" :key="item.name" :href="item.href" @click="mobileMenuOpen = false" class="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md">
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/ST-logo.png' // atau '../assets/ST-logo.png' tergantung lokasi file

type NavItem = { name: string; href: string }

const mobileMenuOpen = ref(false)

const navItems: NavItem[] = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Produk', href: '#produk' },
  { name: 'Kontak', href: '#kontak' }
]
</script>
