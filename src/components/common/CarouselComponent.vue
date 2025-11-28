<template>
  <div class="relative w-full overflow-hidden">
    <div class="flex transition-transform duration-300 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="flex-shrink-0 w-full" v-for="(item, index) in items" :key="index">
        <img :src="item.image" :alt="item.alt" class="w-full h-auto" />
      </div>
    </div>
    <button @click="prevSlide" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
      &#10094;
    </button>
    <button @click="nextSlide" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
      &#10095;
    </button>
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span
        v-for="(item, index) in items"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 bg-gray-800 rounded-full cursor-pointer"
        :class="{ 'bg-white': currentIndex === index }"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    items:Array
  })

const currentIndex = ref(0);

function nextSlide() {
  if (currentIndex.value < items.value.length - 1) {
    currentIndex.value += 1;
  } else {
    currentIndex.value = 0;
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  } else {
    currentIndex.value = items.value.length - 1;
  }
}

function goToSlide(index) {
  currentIndex.value = index;
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel img {
  width: 100%;
  height: auto;
}
.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
}
.carousel-button.left {
  left: 0;
}
.carousel-button.right {
  right: 0;
}
.carousel-dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}
.carousel-dots span {
  width: 0.5rem;
  height: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
}
.carousel-dots span.active {
  background-color: white;
}
</style>
