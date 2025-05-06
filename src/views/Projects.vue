<script setup>
import { useRouter } from 'vue-router'
import { projects } from '@/Utils'
import IconChevronRight from '~icons/mdi/chevron-right'
import IconReact from '~icons/mdi/react'
import IconAWS from '~icons/mdi/aws'
import IconFirebase from '~icons/mdi/firebase'

const router = useRouter()

function goToProject(project) {
  router.push({ name: project.pageName })
}
const technologyIcons = {
  React: IconReact,
  'React Native': IconReact,
  AWS: IconAWS,
  Firebase: IconFirebase,
}

const technologyIconUrls = {
  CleverCloud: '/icons/icon_clevercloud.webp',
  MongoDB: '/icons/icon_mongodb.png',
}
</script>

<template>
  <div class="mx-auto p-4 bg-cream min-h-screen flex flex-col items-center">
    <h1 class="text-4xl text-center text-soft-pink p-6 font-radiate">My Projects</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 w-1/2 sm:w-1/3 aspect-square">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-soft-pink hover:bg-light-peach rounded-lg flex flex-row items-center gap-2 p-4 transition-transform transform hover:scale-155 group"
      >
        <img
          :src="project.logoUrl"
          :alt="`logo ${project.title}`"
          class="w-full h-auto mb-4 rounded-lg object-cover"
        />
        <div class="gap-2 justify-between hidden flex-col group-hover:flex">
          <div class="flex flex-col gap-2">
            <span class="text-white text-lg font-semibold font-radiate">{{ project.title }}</span>
            <span class="text-white text-lg font-semibold">{{ project.description }}</span>
            <div class="flex gap-2 mt-2">
              <template v-for="tech in project.technologies" :key="tech">
                <button
                  @click="goToProject(project)"
                  class="flex justify-end bg-mint-green text-white hover:bg-dark-mint-green rounded-lg p-2"
                >
                  <component
                    v-if="technologyIcons[tech]"
                    :is="technologyIcons[tech]"
                    class="w-6 h-6 text-white"
                  />

                  <img
                    v-else-if="technologyIconUrls[tech]"
                    :src="technologyIconUrls[tech]"
                    :alt="tech"
                    class="w-6 h-6"
                  />
                </button>
              </template>
            </div>
          </div>
          <button @click="goToProject(project)" class="flex justify-end">
            <span
              class="bg-mint-green text-white hover:bg-dark-mint-green text-sm mt-2 rounded-lg p-2 flex items-center"
            >
              Read More <IconChevronRight class="ml-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
