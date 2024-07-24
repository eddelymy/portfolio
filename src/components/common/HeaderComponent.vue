<template>
  <div class="flex w-full items-center">
    <div>
      <span class="text-4xl font-black" style="font-family: 'Sevillana'">Amina Eddelymy</span>
    </div>
    <ul class="grow flex flex-row-reverse items-center">
      <li type="button" class="cursor-pointer" @click="toggleMenu = !toggleMenu">
        <font-awesome-icon 
          :icon="toggleMenu ? ['fas', 'bars'] : ['fas', 'xmark'] " 
          class="text-3xl"/>
      </li>
      <li type="butto" class="mr-5 cursor-pointer" @click="darkMode = !darkMode">
        <font-awesome-icon :icon="darkMode ? ['fas', 'moon'] : ['fas', 'sun']" />
      </li>
      <li class="mr-5 cursor-pointer" @click="changeLanguage = !changeLanguage">
        <span v-if="changeLanguage">FR</span>
        <span v-if="!changeLanguage">EN</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {storeToRefs} from "pinia"
import {useDarkModeStore} from '../../stores/darkMode'
import {useToggleMenuStore} from '../../stores/toggleMenu'

const darkModeStore = useDarkModeStore()
const {darkMode} = storeToRefs(darkModeStore)

const toggleMenuStore = useToggleMenuStore()
const {toggleMenu} = storeToRefs(toggleMenuStore)
const changeLanguage = ref(true)
</script>

<style scoped>
</style>