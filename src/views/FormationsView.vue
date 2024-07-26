<template>
  <div class="w-full h-full py-36">
    <h1 class="pb-2 text-3xl border-b"
      :class="darkMode ? ' border-white' : 'border-black' ">
      Formations & Certificats
    </h1>
    <div class="mt-16 flex h-96 p-4">
      <div class="w-full mr-16 flex flex-col h-full ">
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
        class="rounded-md bg-opacity-50 w-full h-full"
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
    <div class="py-16 flex px-4 ">
        <div 
          class="mr-6 cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300  rounded-md  bg-opacity-50 w-full p-6 border-l-4 "
          :class="!darkMode ? ' bg-white border-l-black' : 'bg-black border-l-white' ">
          <h1 class="text-2xl">
            <font-awesome-icon :icon="['fas', 'certificate']" class="mr-1" />
              Classez et segmentez des données visuelles 
          </h1>
          <div class="mt-4 flex flex-col">
            <span>
              OpenClassrooms
            </span>
          </div>
        </div>
        <div 
          class="mr-6 cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300  rounded-md  bg-opacity-50 w-full p-6 border-l-4 "
          :class="!darkMode ? ' bg-white border-l-black' : 'bg-black border-l-white' ">
          <h1 class="text-2xl">
            <font-awesome-icon :icon="['fas', 'certificate']" class="mr-1" />
              Apprenez les bases du langage Python
          </h1>
          <div class="mt-4 flex flex-col">
            <span>
              OpenClassrooms
            </span>
          </div>
        </div>
        <div 
          class="mr-6 cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300  rounded-md  bg-opacity-50 w-full p-6 border-l-4 "
          :class="!darkMode ? ' bg-white border-l-black' : 'bg-black border-l-white' ">
          <h1 class="text-2xl">
            <font-awesome-icon :icon="['fas', 'certificate']" class="mr-1" />
              Apprenez à programmer en Java
          </h1>
          <div class="mt-4 flex flex-col">
            <span>
              OpenClassrooms
            </span>
          </div>
        </div>
        <div 
          class="mr-6 cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300  rounded-md  bg-opacity-50 w-full p-6 border-l-4 "
          :class="!darkMode ? ' bg-white border-l-black' : 'bg-black border-l-white' ">
          <h1 class="text-2xl">
            <font-awesome-icon :icon="['fas', 'certificate']" class="mr-1" />
              Apprenez à programmer avec JavaScript
          </h1>
          <div class="mt-4 flex flex-col">
            <span>
              OpenClassrooms
            </span>
          </div>
        </div>
        <div 
          class="mr-6 cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300  rounded-md  bg-opacity-50 w-full p-6 border-l-4 "
          :class="!darkMode ? ' bg-white border-l-black' : 'bg-black border-l-white' ">
          <h1 class="text-2xl">
            <font-awesome-icon :icon="['fas', 'certificate']" class="mr-1" />
              Concevez votre site web avec PHP et MySQL
          </h1>
          <div class="mt-4 flex flex-col">
            <span>
              OpenClassrooms
            </span>
          </div>
        </div>
        <div 
          class="cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300  rounded-md  bg-opacity-50 w-full p-6 border-l-4 "
          :class="!darkMode ? ' bg-white border-l-black' : 'bg-black border-l-white' ">
          <h1 class="text-2xl">
            <font-awesome-icon :icon="['fas', 'certificate']" class="mr-1" />
              Programmez en orienté objet en PHP
          </h1>
          <div class="mt-4 flex flex-col">
            <span>
              OpenClassrooms
            </span>
          </div>
        </div>
        
      </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia"
import {useDarkModeStore} from '../stores/darkMode'

const darkModeStore = useDarkModeStore()
const {darkMode} = storeToRefs(darkModeStore)
</script>

<style scoped></style>