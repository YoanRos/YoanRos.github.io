<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Create refs for the cursor elements
const innerCursor = ref(null)
const outerCursor = ref(null)
const elements = ['span', 'h1', 'h2', 'h3', 'a']

const growCursor = () => {
  if (innerCursor.value) {
    innerCursor.value.classList.add('grow')
  }
}
const shrinkCursor = () => {
  if (innerCursor.value) {
    innerCursor.value.classList.remove('grow')
  }
}
// Function to move the cursor
const moveCursor = (e) => {
  if (innerCursor.value && outerCursor.value) {
    innerCursor.value.style.left = `${e.clientX}px`
    innerCursor.value.style.top = `${e.clientY}px`
    outerCursor.value.style.left = `${e.clientX}px`
    outerCursor.value.style.top = `${e.clientY}px`
  }
}

// Set up the event listener when the component is mounted
onMounted(() => {
  document.addEventListener('mousemove', moveCursor)

  const spans = document.querySelectorAll('span')
  console.log(spans)
  elements.forEach((selector) => {
    const items = document.querySelectorAll(selector)
    items.forEach((item) => {
      item.addEventListener('mouseenter', growCursor)
      item.addEventListener('mouseleave', shrinkCursor)
    })
  })
})

// Clean up the event listener when the component is unmounted
onUnmounted(() => {
  document.removeEventListener('mousemove', moveCursor)
  elements.forEach((selector) => {
    const items = document.querySelectorAll(selector)
    items.forEach((item) => {
      item.removeEventListener('mouseenter', growCursor)
      item.removeEventListener('mouseleave', shrinkCursor)
    })
  })
})
</script>

<template>
  <main class="cursor-none">
    <div ref="innerCursor" class="inner-cursor"></div>
    <div ref="outerCursor" class="outer-cursor"></div>
    <router-view></router-view>
  </main>
</template>

<style>
.inner-cursor {
  position: fixed;
  width: 10px;
  z-index: 11;
  height: 10px;
  transform: translate(-50%, -50%);
  background-color: #6c3082;
  border-radius: 50%;
  pointer-events: none;
  transition:
    width 0.5s,
    height 0.5s;
}

.inner-cursor.grow {
  width: 25px;
  height: 25px;
}

.outer-cursor {
  position: fixed;
  z-index: 11;
  width: 25px;
  height: 25px;
  transform: translate(-50%, -50%);
  border: 1px solid #6c3082;
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: difference;
}
</style>
