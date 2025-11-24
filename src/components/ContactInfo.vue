<template>
  <div>
    <div v-for="c in contactInfo" :key="c.title" class="bg-white p-6 rounded-xl shadow-lg mb-6 flex items-start">
      <div class="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
        <i :class="c.icon" class="text-white text-xl"></i>
      </div>
      <div>
        <h4 class="font-bold text-gray-800 mb-2">{{ c.title }}</h4>
        <p class="text-gray-600">{{ c.info }}</p>
      </div>
    </div>

    <div class="bg-gray-300 h-64 rounded-xl shadow-lg overflow-hidden">
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="100%"
  style="border:0;"
  :allowfullscreen="true"
  loading="lazy"
></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
type Contact = { icon: string; title: string; info: string }
const props = defineProps<{ contactInfo: Contact[] }>()
</script>
