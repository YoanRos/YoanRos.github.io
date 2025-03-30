<script setup>
import VuePdfEmbed from 'vue-pdf-embed'

// optional styles
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'

// either URL, Base64, binary, or document proxy
const pdfSource = 'C:\Users\Yoan\Documents\CV et autres\porfolio\src\assets\Resume_Yoan Roszak.pdf'
</script>

<template>
  <VuePdfEmbed annotation-layer text-layer :source="pdfSource" />
</template>
