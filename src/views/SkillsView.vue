<template>
  <div class="w-full h-full py-36 justify-items-center">
    <h1 class="pb-2 text-3xl border-b"
      :class="darkMode ? ' border-white' : 'border-black' ">
      Compétence
    </h1>
    <div class="mt-16 flex flex-row p-4 min-h-52">
      <div 
        class="rounded-md h-full bg-opacity-50 w-full p-6 flex flex-wrap justify-between "
        :class="!darkMode ? ' bg-white' : 'bg-black' ">
        <div class="" v-for="(skill,index) in skills" :key="index">
          <h1 class="text-2xl">
            {{ skill.title }}
          </h1>
          <div class="mt-4 flex flex-wrap justify-between"
            v-for="techno in skill.children">
            <span class=" text-white rounded-md px-3"
              :class="darkMode ? 'bg-[#3b82f6]' : 'bg-[#a855f7]'">
                {{ techno.title }}
                <!-- #3b82f6 -->
            </span>
          </div>
        </div>
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
    title:'Langages de programmation',
    children:[{
      title:'Python'
    },
    {
      title:'Java'
    },
    {
      title:'Php'
    }]
  },
  {
    title:'Développement web/mobile',
    children:[{
      title:'HTML'
    },
    {
      title:'JavaScript'
    },
    {
      title:'VueJS'
    },
    {
      title:'ReactJS'
    },
    {
      title:'Android'
    },
    {
      title:'Bootstrap'
    },
    {
      title:'Tailwind'
    },
    {
      title:'Bulma'
    }]
  },
  {
    title:'Bases de données',
    children:[{
      title:'Mongodb'
    },
    {
      title:'Hbase'
    },
    {
      title:'BDR'
    }]
  },
  {
    title:'Langages de requête ',
    children:[{
      title:'PL/SQL'
    },
    {
      title:'SQL'
    }]
  },
  {
    title:'Science de données',
    children:[{
      title:'Algorithmes Machine Learning'
    },
    {
      title:'Algorithmes Deep Learning'
    },
    {
      title:'Statistique et probabilité'
    }]
  },
  {
    title:'BigData/Business Intelligence',
    children:[{
      title:'Hadoop'
    },
    {
      title:'Appache Hive'
    },
    {
      title:'Pentaho'
    },
    {
      title:'Apache Spark'
    }]
  },
])

const darkModeStore = useDarkModeStore()
const {darkMode} = storeToRefs(darkModeStore)
</script>

<style scoped></style>