<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showImage = ref(false)
const scrollPosition = ref(0)

const handleScroll = () => {
  scrollPosition.value = window.scrollY
}

onMounted(() => {
  showImage.value = true
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <transition name="fade" class="">
    <img
      v-if="showImage"
      src="/pinkFlower.svg"
      alt="Pink FLower"
      class=""
      :style="{
        transform: `rotate(${scrollPosition / 10}deg) translateY(${-scrollPosition / 20}px)`,
      }"
    />
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
