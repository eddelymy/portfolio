import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', () => {
  const darkMode = ref(true)
  function changeMode() {
    darkMode.value = !darkMode.value
  }

  return { darkMode, changeMode }
})
