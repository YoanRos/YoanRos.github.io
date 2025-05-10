<script setup>
// optional styles
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'

// either URL, Base64, binary, or document proxy
const pdfSource = '/Resume_Yoan_Roszak.pdf'

function downloadPDF() {
  const link = document.createElement('a')
  link.href = pdfSource // The path to your PDF file
  link.download = 'Resume_Yoan_Roszak.pdf' // The name the PDF will have when downloaded
  link.click() // Programmatically click the link to trigger the download
}
</script>

<template>
  <button
    class="flex items-center gap-3 px-4 py-3 text-xl text-white font-radiate-regular bg-lavender hover:bg-dark-lavender transition-colors duration-200 rounded-md mt-8"
    @click="downloadPDF"
  >
    Download My Resume
  </button>
</template>
