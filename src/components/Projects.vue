<script setup>
import { useRouter } from 'vue-router'
import { projects, technologyUrls, technologyIconUrls } from '@/Utils'
import IconChevronRight from '~icons/mdi/chevron-right'
import IconReact from '~icons/mdi/react'
import IconAWS from '~icons/mdi/aws'
import IconFirebase from '~icons/mdi/firebase'

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
  <div class="p-4 flex flex-col">
    <!-- <h1 class="text-4xl text-center text-soft-pink p-6 font-radiate">My Projects</h1> -->
    <div
      class="grid grid-cols-2 gap-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:gap-2 md:gap-4 lg:gap-8"
    >
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-soft-pink hover:bg-light-peach rounded-lg flex flex-row gap-2 p-4 transition-transform transform hover:scale-105 sm:hover:scale-115 md:hover:scale-125 lg:hover:scale-135 group aspect-square flex-wrap"
      >
        <div class="flex flex-col justify-between align-middle w-full group-hover:hidden">
          <span class="text-white text-md md:text-md lg:text-2xl font-radiate">{{
            project.title
          }}</span>
          <div class="h-full w-full flex align-middle justify-center aspect-square p-8">
            <img :src="project.logoUrl" :alt="`logo ${project.title}`" class="object-cover" />
          </div>
          <div class="flex gap-1 md:gap-2 mt-2">
            <template v-for="tech in project.technologies" :key="tech">
              <button
                @click="openTechnologyUrl(tech)"
                class="flex justify-end bg-mint-green text-white hover:bg-dark-mint-green rounded-lg p-2"
              >
                <component
                  v-if="technologyIcons[tech]"
                  :is="technologyIcons[tech]"
                  class="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10"
                />

                <img
                  v-else-if="technologyIconUrls[tech]"
                  :src="technologyIconUrls[tech]"
                  :alt="tech"
                  class="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10"
                />
              </button>
            </template>
          </div>
        </div>
        <div class="gap-2 justify-between hidden flex-col group-hover:flex">
          <div class="flex flex-col gap-2 mt-2">
            <span class="text-white text-base md:text-md lg:text-xl font-radiate">{{
              project.title
            }}</span>
            <span class="text-white text-sm md:text-sm lg:text-lg">{{ project.description }}</span>
          </div>
          <div class="flex flex-row justify-between gap-2">
            <div class="flex gap-1 md:gap-2 mt-2 flex-wrap">
              <template v-for="tech in project.technologies" :key="tech">
                <button
                  @click="openTechnologyUrl(tech)"
                  class="flex justify-end bg-mint-green text-white hover:bg-dark-mint-green rounded-lg p-2"
                >
                  <component
                    v-if="technologyIcons[tech]"
                    :is="technologyIcons[tech]"
                    class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                  />

                  <img
                    v-else-if="technologyIconUrls[tech]"
                    :src="technologyIconUrls[tech]"
                    :alt="tech"
                    class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </button>
              </template>
            </div>
            <button v-if="project.link" @click="goToProject(project.link)" class="flex justify-end">
              <span
                class="bg-mint-green text-white hover:bg-dark-mint-green text-sm mt-2 rounded-lg sm:p-1 md:p-2 flex items-center"
              >
                Read More <IconChevronRight class="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
