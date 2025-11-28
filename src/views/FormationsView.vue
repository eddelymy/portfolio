<template>
  <div class="w-full h-full pt-36">
    <h1 class="pb-2 text-3xl border-b"
      :class="darkMode ? ' border-white' : 'border-black' ">
      Formations & Certificats
    </h1>
    <div class="mt-16 w-full max-lg:h-full">
      <div class="grid grid-cols-2 max-lg:grid-cols-1 gap-5 px-4 max-h-96 max-w-[900px] max-lg:w-full max-lg:h-full  mx-auto">
        <div class="w-full max-lg:mr-0 mr-16 flex flex-col justify-between">
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
            class="w-px  h-full mx-auto"
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
        <!-- images -->
        <div 
          class="rounded-md bg-opacity-50 w-full max-lg:hidden"
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
      <!-- certificates -->
      <div class="grid grid-cols-2 gap-5 px-4 max-w-[900px] max-lg:w-full mt-24 mx-auto">
          <div 
            class="mb-3 cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300  rounded-md  bg-opacity-50 w-full p-6 border-l-4 "
            :class="!darkMode ? ' bg-white border-l-black' : 'bg-black border-l-white' "
            v-for="certificate in data" :key="certificate.id"
            >
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
      <div class="flex justify-center p-4 w-[900px]  max-lg:w-full mx-auto">
        <button 
          type="button" 
          class="flex items-center"
          v-show="page != 0"
          @click="previous"
        >
          <font-awesome-icon :icon="['fas', 'arrow-left']"/>
        </button>
        <span class="text-xl px-5">skip</span>
        <button 
          type="button" 
          class="flex items-center"
          v-show="page != certificates.length-4"
          @click="next"
        >
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </button>
      </div>
    </div>
  </div>
  <div
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
    }"
  >test</div>
</template>

<script setup>
import {storeToRefs} from "pinia"
import {useDarkModeStore} from '../stores/darkMode'
import Carousel from '../components/common/CarouselComponent.vue'
import {ref, onMounted} from 'vue'

const certificates = ref([
  {
    id:0,
    title:"Classez et segmentez des données visuelles",
    site:'OpenClassrooms'

  },
  {
    id:1,
    title:"Apprenez les bases du langage Python",
    site:'OpenClassrooms'

  },
  {
    id:2,
    title:"Apprenez à programmer en Java",
    site:'OpenClassrooms'

  },
  {
    id:3,
    title:"Apprenez à programmer avec JavaScript",
    site:'OpenClassrooms'

  },
  {
    id:4,
    title:"Concevez votre site web avec PHP et MySQL",
    site:'OpenClassrooms'

  },
  {
    id:5,
    title:"Programmez en orienté objet en PHP",
    site:'OpenClassrooms'

  }
])
const data = ref([])
const page = ref(0)
const darkModeStore = useDarkModeStore()
const {darkMode} = storeToRefs(darkModeStore)

onMounted(()=>{
  showCertificates(page.value)
})

function showCertificates(page){
  data.value = []
  certificates.value.map(item =>{
    if(item.id <= 2*page + 1 && item.id >= 2*page){
      data.value.push(item)
    }
  })
}
function next(){
  page.value += 1
  showCertificates(page.value)
}
function previous(){
  page.value -= 1
  showCertificates(page.value)
}
</script>

<style scoped></style>
