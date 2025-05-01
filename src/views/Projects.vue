<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function showProject() {
  router.push({ name: 'Oz' })
}
</script>

<template>
  <div class="mx-auto p-4 bg-cream min-h-screen flex-col">
    <p class="text-4xl text-center text-soft-pink p-20 font-radiate">My Projects</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <button class="bg-soft-pink hover:bg-light-peach rounded-lg" @click="showProject">
        <img :src="'/logo_oz.png'" alt="logo Oz" class="w-full h-auto" />
      </button>
      <button class="bg-soft-pink hover:bg-light-peach rounded-lg" @click="showProject">
        <img :src="'/logo_oz.png'" alt="logo Oz" class="w-full h-auto" />
      </button>
      <button class="bg-soft-pink hover:bg-light-peach rounded-lg" @click="showProject">
        <img :src="'/logo_oz.png'" alt="logo Oz" class="w-full h-auto" />
      </button>
      <button class="bg-soft-pink hover:bg-light-peach rounded-lg" @click="showProject">
        <img :src="'/logo_oz.png'" alt="logo Oz" class="w-full h-auto" />
      </button>
      <button class="bg-soft-pink hover:bg-light-peach rounded-lg" @click="showProject">
        <img :src="'/logo_oz.png'" alt="logo Oz" class="w-full h-auto" />
      </button>
      <button class="bg-soft-pink hover:bg-light-peach rounded-lg" @click="showProject">
        <img :src="'/logo_oz.png'" alt="logo Oz" class="w-full h-auto" />
      </button>
    </div>
  </div>
</template>
