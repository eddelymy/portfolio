import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToggleMenuStore = defineStore('toggleMenu', () => {
  const toggleMenu = ref(true)
  function toggleMenufunction() {
    toggleMenu.value = !toggleMenu.value
  }

  return { toggleMenu, toggleMenufunction }
})
