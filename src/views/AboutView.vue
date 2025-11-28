<template>
  <div class="w-full h-full py-36">
    <h1 class="pb-2 text-3xl border-b"
      :class="darkMode ? ' border-white' : 'border-black' ">
      À propos
    </h1>
    <div class="mt-4 flex p-4">
      <div class="text-balance">
        Hey, je suis Amina EDDELYMY, 
        <br>
        ingénieure en informatique et 
        en ingénierie de données, avec une passion profonde pour 
        le secteur des technologies de l'information. Curieuse de 
        nature, je suis toujours en quête de découvrir et d'explorer 
        les nouvelles technologies, tant dans le domaine du 
        développement front-end que dans celui de la science des 
        données. Mon intérêt s'étend à l'analyse de données, à 
        l'intelligence artificielle et au Big Data. J'aime tester 
        et utiliser chaque nouvelle technologie qui me passionne, 
        et je trouve une grande satisfaction dans le coding et la 
        résolution de problèmes techniques.
      </div>
      <img src="../assets/images/amina_edd.png" class="h-44"/>
    </div>
    <button type="button" class="px-4 animate-bounce">
      <a href="src\assets\cv\CV-Amina-EDDELYMY.pdf" download="CV-Amina-EDDELYMY.pdf">
        <font-awesome-icon :icon="['fas', 'download']"  />
          <span class="ml-2">curriculum vitae</span>
      </a>
    </button>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia"
import {useDarkModeStore} from '../stores/darkMode'

const darkModeStore = useDarkModeStore()
const {darkMode} = storeToRefs(darkModeStore)
</script>

<style scoped></style>