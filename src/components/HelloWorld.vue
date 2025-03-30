//
<script setup>
import { ref, computed } from 'vue'
import VuePdfEmbed from 'vue-pdf-embed'

// optional styles
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'

// either URL, Base64, binary, or document proxy
const pdfSource = '/Resume_Yoan_Roszak.pdf'
defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const show = ref(false)
const text = computed(() => (show.value ? 'Download CV' : 'Display CV'))

function toggleShow() {
  if (show.value) {
    downloadPDF()
  }
  show.value = true
}

function downloadPDF() {
  const link = document.createElement('a')
  link.href = pdfSource // The path to your PDF file
  link.download = 'Resume_Yoan_Roszak.pdf' // The name the PDF will have when downloaded
  link.click() // Programmatically click the link to trigger the download
}
</script>

<template>
  <div class="greetings">
    <button class="cta" @click="toggleShow">
      {{ text }}
    </button>
    <Transition>
      <div v-if="show">
        <VuePdfEmbed :source="pdfSource" :annotation-layer="true" :text-layer="true" :scale="2.5" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.cta {
  background-color: #00f5d4; /* Main color */
  color: white; /* White text color */
  padding: 14px 28px; /* Vertical and horizontal padding */
  font-size: 16px; /* Text size */
  font-weight: bold; /* Bold text */
  border: none; /* Remove border */
  border-radius: 8px; /* Rounded corners */
  text-align: center; /* Center text inside */
  text-decoration: none; /* Remove underline */
  cursor: pointer; /* Pointer cursor on hover */
  transition:
    background-color 0.3s,
    transform 0.3s ease; /* Smooth transition on hover */
  opacity: 1; /* Default visibility */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.cta:hover {
  background-color: #00bbf9; /* Light blue variant for hover */
  transform: translateY(-3px); /* Lift the button on hover */
}

.cta:focus {
  outline: none; /* Remove default focus outline */
  box-shadow: 0 0 0 3px rgba(0, 191, 249, 0.5); /* Custom focus outline */
}

.cta:active {
  background-color: #f15bb5; /* Pink variant for active (clicking) */
  transform: translateY(1px); /* Slightly press the button down */
}

.cta.disabled {
  background-color: #e6e6e6; /* Grey background when disabled */
  cursor: not-allowed; /* No pointer cursor */
  opacity: 0.5; /* Reduced opacity */
}

.cta-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full screen height */
}
</style>
