<template>
  <div class="w-full h-full py-36">
    <h1 class="pb-2 text-3xl border-b"
      :class="darkMode ? ' border-white' : 'border-black' ">
      Projets
    </h1>
    <div class="h-full w-full flex items-center">
      <div 
        class="rounded-md text-center justify-items-center p-7 bg-opacity-50 w-[390px] flex flex-col"
        :class="!darkMode ? 'bg-white' :'bg-black'">
        My first projet
      </div>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia"
import {useDarkModeStore} from '../stores/darkMode'
import {ref,onMounted} from 'vue'

const darkModeStore = useDarkModeStore()
const {darkMode} = storeToRefs(darkModeStore)

const projects = ref([])




</script>

<style scoped></style>