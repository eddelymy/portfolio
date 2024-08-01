<template>
  <div class="fixed top-0 left-0 w-full h-full min-h-screen bg-black bg-opacity-50 visible transition-opacity duration-150 z-10 flex items-center">
    <div class="rounded-md mx-auto text-center text-black justify-items-center p-7 bg-opacity-90 bg-white w-[390px] flex flex-col">
      <font-awesome-icon 
        :icon="statut ? ['fas', 'circle-exclamation'] : ['fas', 'thumbs-up']"
        class="text-5xl text-opacity-80 text-black"
         />
     <div class="mt-6">
        {{ msg }}
     </div> 
     <button 
      class="rounded-md bg-opacity-80 mt-6 bg-black text-white"
      @click="close">
        Ok
     </button>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    msg:String,
    statut:Boolean
  })

  const emit= defineEmits('closeModal')
  function close(){
    emit('closeModal')
  }
</script>

<style scoped>
</style>