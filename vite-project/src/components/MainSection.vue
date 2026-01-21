<template>
  <div class="min-h-screen flex flex-col bg-linear-to-tr from-blue-500 via-blue-400 to-blue-200">
    
    <div v-if="store.loading" class="flex-1 flex items-center justify-center text-white text-2xl">
      <i class="fa-solid fa-spinner animate-spin  mr-2"></i> Loading...
    </div>

    <main v-else-if="store.weather" class="flex-1 p-4">
      <div class="text-center text-white p-3">
        <h2 class="text-6xl md:text-8xl font-bold m-3">
          {{ store.weather.current_condition[0].temp_C }}°C
        </h2>
        <p class="text-xl md:text-3xl font-medium">
          {{ store.weather.current_condition[0].weatherDesc[0].value }}
        </p>
        <div class="flex flex-wrap justify-center gap-2 text-md md:text-lg mt-2 opacity-90">
          <span>{{ store.weather.nearest_area[0].areaName[0].value }},</span>
          <span>{{ store.weather.nearest_area[0].country[0].value }}</span>
          <span class="hidden md:inline">|</span>
          <span>{{ store.weather.current_condition[0].localObsDateTime }}</span>
        </div>
      </div>

      <h1 class="text-center text-white text-xl md:text-3xl mt-8 mb-4">
        <i class="fa-solid fa-cloud-sun mr-2"></i> Weather Details
      </h1>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-white">
        <div class="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center">
          <p class="text-sm opacity-80 font-bold uppercase">Humidity</p>
          <p class="text-xl font-semibold">{{ store.weather.current_condition[0].humidity }}%</p>
          <i class="fa-solid fa-droplet text-blue-200 mt-2"></i>
        </div>

        <div class="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center">
          <p class="text-sm opacity-80 font-bold uppercase">Feels Like</p>
          <p class="text-xl font-semibold">{{ store.weather.current_condition[0].FeelsLikeC }}°C</p>
          <i class="fa-solid fa-temperature-half text-orange-200 mt-2"></i>
        </div>

        <div class="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center">
          <p class="text-sm opacity-80 font-bold uppercase">Wind</p>
          <p class="text-xl font-semibold">{{ store.weather.current_condition[0].windspeedKmph }} km/h</p>
          <i class="fa-solid fa-wind text-gray-200 mt-2"></i>
        </div>

        <div class="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center">
          <p class="text-sm opacity-80 font-bold uppercase">Pressure</p>
          <p class="text-xl font-semibold">{{ store.weather.current_condition[0].pressure }}</p>
          <i class="fa-solid fa-gauge-high text-green-200 mt-2"></i>
        </div>
      </div>

      <div class="mt-12">
        <h2 class="text-center text-2xl font-bold text-white mb-6">3 Day Forecast</h2>
        <div class="flex flex-wrap gap-4 justify-center text-white">
          <div v-for="(day, index) in store.weather.weather" :key="index"
            class="bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded-2xl text-center min-w-37.5">
            <img :src="day.hourly[0].weatherIconUrl[0].value" class="w-16 mx-auto drop-shadow-lg" />
            <p class="mt-3 font-bold">{{ day.date }}</p>
            <p class="text-lg">{{ day.maxtempC }}° / <span class="opacity-70">{{ day.mintempC }}°</span></p>
          </div>
        </div>
      </div>
    </main>

    <div v-else class="flex-1 flex items-center justify-center text-white">
      <p class="bg-black/20 px-6 py-3 rounded-full">Search for a city to see weather</p>
    </div>

    <footer class="w-full border-t border-white/10 bg-blue-500/20 backdrop-blur-md py-6 px-4">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-center md:text-left text-white">
          <h2 class="text-xl font-bold tracking-wide">Weatherly</h2>
          <p class="text-white/60 text-xs mt-1">&copy; 2026 Weatherly. Built with Vue & Tailwind.</p>
        </div>
        <div class="flex space-x-4">
          <a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white text-xs">GH</a>
          <a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white text-xs">LI</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { useWeatherStore } from '../store/index'
const store = useWeatherStore()
</script>