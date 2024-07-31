import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', () => {
  const darkMode = ref(false)
  function changeMode() {
    darkMode.value = !darkMode.value
  }

  return { darkMode, changeMode }
})
