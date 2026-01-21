<template>
<div class= "bg-blue-500/98 ">
  <nav class="max-w-6xl mx-auto flex flex-col md:flex-row 
              items-center justify-between p-5 gap-3">

    <!-- Logo -->
    <div class="text-white text-lg md:text-xl font-medium">
      <i class="fa-solid fa-cloud-sun mr-1  text-lg md:text-2xl"></i> Weatherly
    </div>

    <!-- Search -->
    <div class="flex items-center bg-white/5 
                border border-white rounded-xl 
                px-3 py-1 w-full md:w-64">

      <input
        type="text"
        v-model="city"
        placeholder="Search location..."
        class="bg-transparent w-full text-white 
               placeholder-white/70
               outline-none border-0
               focus:ring-0 focus:outline-none"
      />

      <i  @click="search" class="fa-solid fa-magnifying-glass 
               text-white cursor-pointer"></i>
    </div>
  </nav>
</div>
</template>
<script setup>
  import { ref } from 'vue'
import { useWeatherStore } from '../store/index'
import { onMounted } from 'vue'
const city = ref('')
const store = useWeatherStore()

function search() {
  store.fetchWeather(city)
  if(city.value.trim() !== '') {
    store.fetchWeather(city.value) // store me bhej do
  }
}
onMounted(() => {
  store.fetchWeather('Lahore') // default city
})
</script>