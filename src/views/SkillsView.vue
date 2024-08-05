<template>
  <div class="w-full h-full py-36 justify-items-center">
    <h1 class="pb-2 text-3xl border-b"
      :class="darkMode ? ' border-white' : 'border-black' ">
      Compétence
    </h1>
    <div class="scrollbar-custom mx-auto max-w-[700px] h-[400px] overflow-y-scroll grid grid-cols-4 gap-5 mt-16 px-2 ">
      <div 
        class=" text-wrap cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300 rounded-md bg-opacity-50 h-[125px] grid grid-rows-2 place-items-center py-3"
        v-for="(skill,index) in skills" :key="index"
          :class="!darkMode ? ' bg-white' : 'bg-black' ">
          <img :src="!darkMode ? `/` + skill.light_logo : `/` + skill.dark_logo "  
            class="mx-auto"
            :width="skill.width"/>
          <span>{{ skill.title }}</span>
        </div>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia"
import {useDarkModeStore} from '../stores/darkMode'
import {ref} from 'vue'

const skills = ref([
    {
      title:'Python',
      light_logo:'python-light.svg',
      dark_logo:'python-dark.svg',
      width:"50"
    },
    {
      title:'Java',
      light_logo:'Java_Logo-light.svg',
      dark_logo:'Java_Logo-dark.svg',
      width:"50"
    },
    {
      title:'Php',
      light_logo:'PHP-logo-light.svg',
      dark_logo:'PHP-logo-dark.svg',
      width:"50"
    },
    {
      title:'HTML',
      light_logo:'html-logo-light.svg',
      dark_logo:'html-logo-dark.svg',
      width:"50"
    },
    {
      title:'JavaScript',
      light_logo:'javascript-light.svg',
      dark_logo:'javascript-dark.svg',
      width:"50"
    },
    {
      title:'VueJS',
      light_logo:'vuejs-light.svg',
      dark_logo:'vuejs-dark.svg',
      width:"50"
    },
    {
      title:'ReactJS',
      light_logo:'react-light.svg',
      dark_logo:'react-dark.svg',
      width:"50"
    },
    {
      title:'Android',
      light_logo:'android-light.svg',
      dark_logo:'android-dark.svg',
    },
    {
      title:'Bootstrap',
      light_logo:'bootstrap-light.svg',
      dark_logo:'bootstrap-dark.svg',
    },
    {
      title:'Tailwind',
      light_logo:'tailwind-light.svg',
      dark_logo:'tailwind-dark.svg',
    },
    {
      title:'Mongodb',
      light_logo:'mongodb-light.svg',
      dark_logo:'mongodb-dark.svg',
    },
    {
      title:'MySQL',
      light_logo:'mysql-light.svg',
      dark_logo:'mysql-dark.svg',
      width:'50'
    },
    {
      title:'SQL',
      light_logo:'sql-light.svg',
      dark_logo:'sql-dark.svg',
      width:"50"
    },
    {
      title:'Machine learning',
      light_logo:'machine-learning-light.svg',
      dark_logo:'machine-learning-dark.svg',
      width:'50'
    },
    {
      title:'Deep learning',
      light_logo:'deep-learning-light.svg',
      dark_logo:'deep-learning-dark.svg',
      width:"50"
    },
    {
      title:'Hadoop',
      light_logo:'hadoop-light.svg',
      dark_logo:'hadoop-dark.svg',
      width:'50'
    },
    {
      title:'Apache Hive',
      light_logo:'hive-light.svg',
      dark_logo:'hive-dark.svg',
      width:'50'
    },
    {
      title:'Apache Spark',
      light_logo:'spark-light.svg',
      dark_logo:'spark-dark.svg',
      width:'50'
    }
    // ,
    // {
    //   title:'Pentaho',
    //   light_logo:'python-light.svg',
    //   dark_logo:'Java_Logo-dark.svg',
    // }
])

const darkModeStore = useDarkModeStore()
const {darkMode} = storeToRefs(darkModeStore)

</script>

<style scoped></style>