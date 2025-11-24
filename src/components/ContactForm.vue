<template>
  <div class="bg-white p-8 rounded-xl shadow-lg">
    <form @submit.prevent="submitForm">
      <div class="mb-6">
        <label class="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
        <input v-model="form.name" type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-semibold mb-2">Email</label>
        <input v-model="form.email" type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-semibold mb-2">Nomor Telepon</label>
        <input v-model="form.phone" type="tel" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-semibold mb-2">Pesan</label>
        <textarea v-model="form.message" rows="4" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"></textarea>
      </div>
      <button type="submit" class="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
        <i class="fas fa-paper-plane mr-2"></i>Kirim Pesan
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const form = reactive({ name:'', email:'', phone:'', message:'' })

function submitForm() {
  alert(`Terima kasih ${form.name}! Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda.`)
  form.name = form.email = form.phone = form.message = ''
}
</script>
