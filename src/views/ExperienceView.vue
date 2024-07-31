<template>
  <div class="w-full h-full py-36 justify-items-center">
    <h1 class="pb-2 text-3xl border-b"
      :class="darkMode ? ' border-white' : 'border-black' ">
      Expérience
    </h1>
    <div class="mt-16 p-4 min-h-52">
      <div 
        class="mb-5 cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300 rounded-md h-full bg-opacity-50 w-full p-6 grid grid-cols-2 gap-4"
        :class="!darkMode ? ' bg-white' : 'bg-black' "
        v-for="(exprerience,index) in experiences" :key="index">
        <div class="flex flex-col">
          <span class="text-2xl">
            <font-awesome-icon :icon="['fas', 'briefcase']" class="mr-1 text-xl" />
            {{ exprerience.title }}
          </span>
          <span class="mt-4">
            <font-awesome-icon :icon="['fas', 'location-dot']" class="mr-1" />
            {{ exprerience.place }} 
          </span>
        </div>
        <div class="flex justify-end">
          <span>
            <font-awesome-icon :icon="['fas', 'calendar']" class="mr-1" />
            {{ exprerience.date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia"
import {useDarkModeStore} from '../stores/darkMode'
import {ref} from 'vue'

const experiences = ref([
  { title:'Ingénieur en développement Front End',
    place:'Groupe Azura, Maraissa',
    date:"20 Mars -- Aujoud'hui"
  },
  { title:"Stage de Projet de Fin d'Etudes (PFE)",
    place:'ONEP',
    date:'Mars 2022 Août 2022'
  },
  { title:"Stage de Projet de Fin d'Année (PFA)",
    place:'TECH 57 ',
    date:'Juil 2021 Sept 2021'
  }
])

const darkModeStore = useDarkModeStore()
const {darkMode} = storeToRefs(darkModeStore)
</script>

<style scoped></style>