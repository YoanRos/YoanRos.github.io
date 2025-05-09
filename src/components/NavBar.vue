<script setup>
import IconHome from '~icons/mdi/home'
import IconProjects from '~icons/mdi/folder'
import IconExperience from '~icons/mdi/timeline'
import IconAbout from '~icons/mdi/information'

const props = defineProps({
  showMenu: Boolean,
})
const emit = defineEmits(['update:showMenu'])

function toggleMenu() {
  emit('update:showMenu', !props.showMenu)
}
</script>

<template>
  <nav class="bg-lavender text-white p-2 md:p-4 fixed h-full">
    <div class="container mx-auto flex-col justify-between items-center">
      <ul class="hidden md:flex flex-col gap-10">
        <li>
          <a
            href="#"
            class="flex items-center gap-3 px-4 py-3 text-xl hover:bg-dark-lavender transition-colors duration-200 rounded-md"
          >
            <IconHome class="w-5 h-5" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href="#work"
            class="flex items-center gap-3 px-4 py-3 text-xl hover:bg-dark-lavender transition-colors duration-200 rounded-md"
          >
            <IconProjects class="w-5 h-5" />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            class="flex items-center gap-3 px-4 py-3 text-xl hover:bg-dark-lavender transition-colors duration-200 rounded-md"
          >
            <IconExperience class="w-5 h-5" />
            <span>Experience</span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            class="flex items-center gap-3 px-4 py-3 text-xl hover:bg-dark-lavender transition-colors duration-200 rounded-md"
          >
            <IconAbout class="w-5 h-5" />
            <span>About</span>
          </a>
        </li>
      </ul>
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>

    <div v-if="showMenu" class="md:hidden bg-lavender text-white p-2">
      <ul class="flex flex-col gap-10">
        <li>
          <a
            href="#"
            class="flex items-center gap-3 px-4 py-3 text-lg hover:bg-dark-lavender transition-colors duration-200 rounded-md"
          >
            <IconHome class="w-4 h-4" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href="#work"
            class="flex items-center gap-3 px-4 py-3 text-lg hover:bg-dark-lavender transition-colors duration-200 rounded-md"
          >
            <IconProjects class="w-4 h-4" />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            class="flex items-center gap-3 px-4 py-3 text-lg hover:bg-dark-lavender transition-colors duration-200 rounded-md"
          >
            <IconExperience class="w-4 h-4" />
            <span>Experience</span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            class="flex items-center gap-3 px-4 py-3 text-lg hover:bg-dark-lavender transition-colors duration-200 rounded-md"
          >
            <IconAbout class="w-4 h-4" />
            <span>About</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
