import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToggleMenuStore = defineStore('toggleMenu', () => {
  const toggleMenu = ref(false)
  function toggleMenufunction() {
    toggleMenu.value = !toggleMenu.value
  }

  return { toggleMenu, toggleMenufunction }
})
