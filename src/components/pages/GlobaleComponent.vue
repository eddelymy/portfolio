<template>
  <div class="h-screen flex flex-col w-full bg-no-repeat bg-cover p-20 overflow-auto" 
    :class="darkMode ? 'bg-[url(../../assets/images/dark-backgroun.svg)] text-white' : 'text-black bg-[url(../../assets/images/ligth-background.svg)]' " >
    <HeaderComponent />
    <MenuComponent/>
    <div v-if="toggleMenu" class="w-full h-full flex items-center">
      <RouterView />
    </div>
  </div>
  
</template>

<script setup>
import HeaderComponent from '../common/HeaderComponent.vue'
import MenuComponent from '../common/MenuComponent.vue'
import { RouterView } from 'vue-router'
import {storeToRefs} from "pinia"
import {useDarkModeStore} from '../../stores/darkMode'
import {useToggleMenuStore} from '../../stores/toggleMenu'
import {onMounted} from 'vue'

const darkModeStore = useDarkModeStore()
const {darkMode} = storeToRefs(darkModeStore)

const toggleMenuStore = useToggleMenuStore()
const {toggleMenu} = storeToRefs(toggleMenuStore)

</script>

<style scoped></style>