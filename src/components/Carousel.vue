<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { projects, technologyUrls, technologyIconUrls } from '@/Utils'
import IconChevronRight from '~icons/mdi/chevron-right'
import IconChevronLeft from '~icons/mdi/chevron-left'

const router = useRouter()
const pageSize = ref(3)
const projectsSize = projects.value.length
const pageIndex = ref(0)

const pageNumber = computed(() => Math.ceil(projectsSize / pageSize.value))

const myEventHandler = () => {
  if (window.innerWidth < 767) {
    pageSize.value = 2
  } else {
    pageSize.value = 3
  }
}

const previousPage = () => {
  if (pageIndex.value > 0) {
    pageIndex.value--
  } else {
    pageIndex.value = pageNumber.value - 1
  }
}

const nextPage = () => {
  if (pageIndex.value < pageNumber.value - 1) {
    pageIndex.value++
  } else {
    pageIndex.value = 0
  }
}

const updatePageIndex = (index) => {
  pageIndex.value = index
}

const currentPageProjects = computed(() => {
  const start = pageIndex.value * pageSize.value
  let end = start + pageSize.value
  if (end > projectsSize) {
    const currentPageProjectsNumber = end - projectsSize
    if (currentPageProjectsNumber == 1) projects[end]
    end = projectsSize
  }
  return projects.value.slice(start, end)
})

onMounted(() => {
  window.addEventListener('resize', myEventHandler)
})

onUnmounted(() => {
  window.removeEventListener('resize', myEventHandler)
})
</script>

<template>
  <div class="flex items-center justify-center flex-col gap-8">
    <div class="flex flex-row justify-between items-center w-full">
      <button @click="previousPage()" class="p-2">
        <IconChevronLeft
          class="bg-light-pink hover:bg-light-purple rounded-full text-white text-4xl"
        />
      </button>

      <Transition name="carouselTransition" mode="out-in">
        <div class="flex flex-row gap-20 p-4 justify-center w-full" :key="pageIndex">
          <div
            v-for="project in currentPageProjects"
            :key="project.id"
            class="flex flex-col items-center"
          >
            <div class="rounded-lg shadow-lg w-full hover:scale-110">
              <div class="h-full w-full flex bg-gradient-to-tr relative">
                <img
                  :src="project.logoUrl"
                  :alt="`logo ${project.title}`"
                  class="rounded-lg object-cover w-full h-full"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t hover:from-black/40 from-black/50 to-transparent rounded-lg"
                ></div>
                <div
                  class="text-white flex flex-col justify-start w-full absolute bottom-0 gap-1 p-2"
                >
                  <span class="font-extrabold font-symbiosis text-lg text-light-pink">
                    {{ project.type }}
                  </span>

                  <span class="text-lg">
                    {{ project.title }}
                  </span>

                  <div class="flex flex-row gap-1">
                    <div v-for="techno in project.technologies" :key="techno.id" class="">
                      <span>{{ techno }}, </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <button @click="nextPage()" class="p-2">
        <IconChevronRight
          class="bg-light-pink hover:bg-light-purple rounded-full text-white text-4xl"
        />
      </button>
    </div>
    <div class="flex gap-2">
      <button
        v-for="index in pageNumber"
        :key="index"
        class="rounded-full p-3 border-2 border-light-pink hover:bg-light-purple text-black"
        :class="{ 'bg-light-pink ': index === pageIndex + 1, 'bg-white': index - 1 !== pageIndex }"
        @click="updatePageIndex(index - 1)"
      ></button>
    </div>
  </div>
</template>

<style>
.carouselTransition-enter-active,
.carouselTransition-leave-active {
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.carouselTransition-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.carouselTransition-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.carouselTransition-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.carouselTransition-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
