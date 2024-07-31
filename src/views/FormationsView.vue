<template>
  <div class="w-full h-full py-36">
    <h1 class="pb-2 text-3xl border-b"
      :class="darkMode ? ' border-white' : 'border-black' ">
      Formations & Certificats
    </h1>
    <div class="mt-16 flex flex-row p-4 min-h-52">
      <div class="w-full max-lg:mr-0 mr-16 flex flex-col justify-between max-h-96">
        <div 
          class="cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300  rounded-md  bg-opacity-50 w-full p-6 border-l-4 "
          :class="!darkMode ? ' bg-white border-l-black' : 'bg-black border-l-white' ">
          <h1 class="text-2xl">
            <font-awesome-icon :icon="['fas', 'graduation-cap']" class="mr-1" />
            Diplôme d'ingénieur - Informatique et Ingénierie de Données 
          </h1>
          <div class="mt-4 flex flex-col">
            <span>
                Ecole Nationale des Sciences Appliquées
            </span>
            <span>
              2017-2022
            </span>
          </div>
        </div>
        <div 
          class="w-px h-56 mx-auto"
          :class="darkMode ? ' bg-white' : 'bg-black' ">
        </div>
        <div class="cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300  rounded-md  bg-opacity-50 w-full p-6 border-l-4 "
        :class="!darkMode ? ' bg-white border-l-black' : 'bg-black border-l-white' ">
          <h1 class="text-2xl">
            <font-awesome-icon :icon="['fas', 'graduation-cap']" class="mr-1" />
            Baccalauréat en Sciences Physiques et Chimique
          </h1>
          <div class="mt-4 flex flex-col">
            <span>
              Lycée Qualifiant Ait Bouguemaz
            </span>
            <span>
              2016-2017
            </span>
          </div>
        </div>
      </div>
      <div 
        class="rounded-md bg-opacity-50 w-full max-h-96 max-lg:hidden"
        :class="!darkMode ? ' bg-white' : 'bg-black' ">
        <img 
          src="../assets/images/image3.svg" 
          v-if="darkMode"
          class="h-full w-full"/>
          <img 
          src="../assets/images/image1.svg" 
          v-if="!darkMode"
          class="h-full w-full"/>
      </div>
    </div>
    <div class="mt-8 flex flex-wrap p-4">
        <div 
          class="mb-3 cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300  rounded-md  bg-opacity-50 w-full p-6 border-l-4 "
          :class="!darkMode ? ' bg-white border-l-black' : 'bg-black border-l-white' "
          v-for="certificate in certificates" :key="certificate.id">
          <h1 class="text-2xl">
            <font-awesome-icon :icon="['fas', 'certificate']" class="mr-1" />
              {{ certificate.title }} 
          </h1>
          <div class="mt-4 flex flex-col">
            <span>
              {{certificate.site}}
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

const certificates = ref([
  {
    id:1,
    title:"Classez et segmentez des données visuelles",
    site:'OpenClassrooms'

  },
  {
    id:2,
    title:"Apprenez les bases du langage Python",
    site:'OpenClassrooms'

  },
  {
    id:3,
    title:"Apprenez à programmer en Java",
    site:'OpenClassrooms'

  },
  {
    id:4,
    title:"Apprenez à programmer avec JavaScript",
    site:'OpenClassrooms'

  },
  {
    id:5,
    title:"Concevez votre site web avec PHP et MySQL",
    site:'OpenClassrooms'

  },
  {
    id:6,
    title:"Programmez en orienté objet en PHP",
    site:'OpenClassrooms'

  }
])
const darkModeStore = useDarkModeStore()
const {darkMode} = storeToRefs(darkModeStore)
</script>

<style scoped></style>