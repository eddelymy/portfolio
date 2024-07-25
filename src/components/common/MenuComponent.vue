<template>
  <div 
    class="w-full h-full flex items-center text-8xl"
    style="font-family: PlayfairDisplay-VariableFont_wght;"  
    v-show="!toggleMenu">
    <ul class="ml-36">
      <li v-for="menu in menus" 
        class="border-l"
        :class="darkMode ? ' border-white' : 'border-black border-l-2' ">
        <RouterLink class="nav-link flex items-center p-6  hover:-translate-y-1 hover:scale-110 " :to="menu.url" @click="toggleMenu = !toggleMenu">
          <span class="text-3xl ease-in-out duration-300">{{ menu.label }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia"
import {useToggleMenuStore} from '../../stores/toggleMenu'
import {useDarkModeStore} from '../../stores/darkMode'
import {onMounted} from 'vue'
import menus from '../../json/menu.json'


const toggleMenuStore = useToggleMenuStore()
const {toggleMenu} = storeToRefs(toggleMenuStore)

const darkModeStore = useDarkModeStore()
const {darkMode} = storeToRefs(darkModeStore)



</script>

<style scoped>
</style>
