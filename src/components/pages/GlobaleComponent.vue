<template>
  <div class="h-screen bg-no-repeat bg-cover p-20" 
    :class="darkMode ? 'bg-[url(../../assets/images/dark-backgroun.svg)] text-white' : 'text-black bg-[url(../../assets/images/ligth-background.svg)]' " >
    <HeaderComponent />
  </div>
  
</template>

<script setup>
import HeaderComponent from '../common/HeaderComponent.vue';
import {storeToRefs} from "pinia"
import {useDarkModeStore} from '../../stores/darkMode'
import {useToggleMenuStore} from '../../stores/toggleMenu'
import {onMounted} from 'vue'

const darkModeStore = useDarkModeStore()
const {darkMode} = storeToRefs(darkModeStore)

onMounted(()=>{
  console.log(darkMode.value)
})
</script>

<style scoped></style>