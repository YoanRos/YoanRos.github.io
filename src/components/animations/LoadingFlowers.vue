<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showImage = ref(false)

onMounted(() => {
  showImage.value = true
})
</script>

<template>
  <transition name="fade">
    <img
      v-if="showImage"
      src="/loadingFlowers.svg"
      alt="Loading Flowers"
      class="rotating-image w-1/5 h-1/5"
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

.rotating-image {
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
