<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function showProject() {
  router.push({ name: 'Oz' })
}
</script>

<template>
  <button class="cta" @click="showProject">
    <img :src="'/logo_oz.png'" alt="logo Oz" />
  </button>
  <button class="cta" @click="showProject">
    <img :src="'/logo_oz.png'" alt="logo Oz" />
  </button>
  <button class="cta" @click="showProject">
    <img :src="'/logo_oz.png'" alt="logo Oz" />
  </button>
</template>
