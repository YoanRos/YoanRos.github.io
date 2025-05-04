<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projects } from '@/Utils'
import IconChevronRight from '~icons/mdi/chevron-right'
import IconChevronLeft from '~icons/mdi/chevron-left'

const router = useRouter()
const selectedProject = ref(null)

function showProject(project) {
  selectedProject.value = project
}

function goToProject(project) {
  router.push({ name: project.pageName })
}
</script>

<template>
  <div class="mx-auto p-4 bg-cream min-h-screen flex flex-col items-center">
    <h1 class="text-4xl text-center text-soft-pink p-6 font-radiate">My Projects</h1>
    <div v-if="!selectedProject" class="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
      <div
        v-for="project in projects"
        :key="project.id"
        class="relative bg-soft-pink hover:bg-light-peach rounded-lg flex flex-col items-center p-4 transition-transform transform hover:scale-105 group"
      >
        <img :src="project.logoUrl" :alt="`logo ${project.title}`" class="w-full h-auto mb-4" />
        <span class="text-soft-pink text-lg font-semibold">{{ project.title }}</span>
        <button
          @click="showProject(project)"
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-mint-green text-white hover:bg-dark-mint-green text-sm mt-2 rounded-lg p-2 flex items-center"
        >
          Read More <IconChevronRight class="ml-1" />
        </button>
      </div>
    </div>
    <div v-else class="p-6 bg-soft-pink rounded-lg w-full max-w-2xl flex flex-col items-center">
      <h2 class="text-4xl text-center text-soft-pink p-4 font-radiate">
        {{ selectedProject.title }}
      </h2>
      <p class="text-2xl text-center text-soft-pink p-4">{{ selectedProject.description }}</p>
      <div class="flex justify-between align-bottom w-full">
        <button
          @click="showProject(null)"
          class="mt-4 bg-light-peach hover:bg-soft-pink rounded-lg p-2 text-soft-pink flex items-center transition-colors"
        >
          <IconChevronLeft class="mr-1" />
          Read Less
        </button>
        <button
          @click="goToProject(selectedProject)"
          class="mt-4 bg-light-peach hover:bg-soft-pink rounded-lg p-2 text-soft-pink flex items-center transition-colors"
        >
          Go to Project Page <IconChevronRight class="ml-1" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
