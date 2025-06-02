<script setup>
import { useRouter } from 'vue-router'
import { projects, technologyUrls, technologyIconUrls } from '@/Utils'
import IconChevronRight from '~icons/mdi/chevron-right'
import IconReact from '~icons/mdi/react'
import IconAWS from '~icons/mdi/aws'
import IconFirebase from '~icons/mdi/firebase'
import Carousel from './Carousel.vue' // Adjust the path as necessary

const router = useRouter()

function goToProject(link) {
  if (link) {
    window.open(link, '_blank')
  }
}
function openTechnologyUrl(tech) {
  const url = technologyUrls[tech]
  if (url) {
    window.open(url, '_blank')
  }
}
const technologyIcons = {
  React: IconReact,
  'React Native': IconReact,
  AWS: IconAWS,
  Firebase: IconFirebase,
}
</script>

<template>
  <div class="p-4 flex flex-col justify-center h-full">
    <Carousel />
  </div>
</template>
