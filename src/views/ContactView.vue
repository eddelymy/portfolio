<template>
  <div class="w-full h-full py-36">
    <h1 class="pb-2 text-3xl border-b"
      :class="darkMode ? ' border-white' : 'border-black' ">
      Contact
    </h1>
    <div class="h-full w-full flex items-center">
      <div 
        class="mt-16 w-[50%] mx-auto flex justify-between "
        :class="darkMode ? ' text-white' : 'text-opacity-80 text-black' ">
        <font-awesome-icon 
          :icon="['fas', 'envelope']" 
          class="text-7xl cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300"
          @click="copyEmail" />
        <a href="https://www.linkedin.com/in/amina-eddelymy-376396204/">
          <font-awesome-icon 
            :icon="['fab', 'linkedin']" 
            class="text-7xl cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300"/>
        </a>
        <font-awesome-icon 
          :icon="['fas', 'phone']" 
          class="text-7xl cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300"
          @click="copyTel"/>
        <font-awesome-icon 
          :icon="['fab', 'square-instagram']" 
          class="text-7xl cursor-pointer hover:-translate-y-1 hover:scale-10 duration-300"/>
      </div>
    </div>
    <AlertComponent 
      :msg="msg"
      :statut="error" 
      @closeModal="close"
      v-if="showAlert" />
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia"
import {useDarkModeStore} from '../stores/darkMode'
import AlertComponent from '../components/common/AlertComponent.vue'
import {ref,onMounted} from 'vue'

// onMounted(()=>{
//   console.log(null === 0)
//   console.log(null > 0)
//   console.log(null >= 0)
// })
const darkModeStore = useDarkModeStore()
const {darkMode} = storeToRefs(darkModeStore)

const msg = ref('')
const showAlert = ref(false)
const error = ref(false)

function copyEmail(){
  const email = 'eddelymyamina@gmail.com'
  showAlert.value = true
  navigator.clipboard.writeText(email)
  .then(() => {
    msg.value = `${email} copié dans le presse-papiers!` 
  })
  .catch(err => {
    msg.value = `Erreur lors de la copie: ${err}`
    error.value = true
  })

}
function copyTel(){
  const tel = '0666589453'
  showAlert.value = true
  navigator.clipboard.writeText(tel)
  .then(() => {
   msg.value = ` ${tel} copié dans le presse-papiers!`
  })
  .catch(err => {
    msg.value = `Erreur lors de la copie: ${err}`
    error.value = true
  });
}
function close(){
  showAlert.value = false
}
</script>

<style scoped></style>