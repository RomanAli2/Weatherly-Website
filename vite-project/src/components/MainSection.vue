
<template>
<div class="min-h-screen bg-linear-to-tr from-blue-500 via-blue-400 to-blue-200">
  <div v-if="store.loading" class="text-center text-white">Loading...</div>
<div class="text-center text-bold items-center p-3 text-white">
      <h2 v-if="store.weather" class="text-4xl text-white md:text-7xl m-3">
    {{ store.weather.current_condition[0].temp_C }}°C
</h2>
    <p class="text-md md:text-2xl font-bold">{{ store.weather.current_condition[0].weatherDesc[0].value }}</p>
    <span class="flex text-center gap-1 justify-center text-md  md:text-lg m-2">
<h2 class="">{{ store.weather.nearest_area[0].areaName[0].value }}</h2>
<h2>{{ store.weather.nearest_area[0].country[0].value }}</h2>  |   <h2 > {{ store.weather.current_condition[0].localObsDateTime }}</h2>
    </span>
</div>
<h1 class="text-center text-white text-xl md:text-3xl"><i class="fa-solid fa-cloud-sun"></i>
    Weather Detail</h1>
<div v-if="store.weather" class='flex justify-center text-white flex-wrap m-3 p-1 gap-5'>
<span class="bg-white/15 border border-white p-6 rounded-md text-center items-center"> <strong>Humidity</strong>
<p> {{ store.weather.current_condition[0].humidity }}%</p>
<p><i class="fa-solid fa-droplet"></i> popinia
</p>
</span>

<span class="bg-white/15  border border-white p-6 rounded-md text-center items-center"> <strong>FeelsLike</strong>
<p> {{ store.weather.current_condition[0].FeelsLikeC }}°C</p>
<p><i class="fa-solid fa-temperature-half"></i> inter</p>
</span>
<span class="bg-white/15 p-6  border border-white  rounded-md text-center items-center">  <strong>windspeed</strong>
 <p> {{ store.weather.current_condition[0].windspeedKmph }} km/h</p>
<p>  <i class="fa-solid fa-wind"></i> low</p>
</span>
<span class="bg-white/15 p-6  border border-white  rounded-md text-center items-center">  <strong>pressure</strong><p> {{ store.weather.current_condition[0].pressure }}</p>
<p> <i class="fa-solid fa-gauge-high"></i> normal</p>
</span>
  </div>
    <div v-if="store.weather">

  <h2 class="text-center text-2xl text-white">
    3 Day Forecast
  </h2>

  <div class="flex gap-6 justify-center text-white">

    <div
      v-for="(day, index) in store.weather.weather"
      :key="index"
      class="bg-white/15 p-4 m-2 border border-white rounded-md text-center"
    >

      <!-- ICON -->
      <img
        :src="day.hourly[0].weatherIconUrl[0].value"
        class="w-16 mx-auto"
      />
      <!-- TEXT -->
      <p class="mt-2 font-medium">{{ day.date }}</p>
      <p>{{ day.maxtempC }}°C / {{ day.mintempC }}°C</p>
      <p>Avg: {{ day.avgtempC }}°C</p>

    </div>

  </div>
</div>


  <div v-else>
      <p>Search for a city to see weather</p>
    </div></div>
      <footer class="mt-auto w-full border-t border-white/20 bg-blue-500 backdrop-blur-md py-8 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      
      <div class="text-center md:text-left">
        <h2 class="text-2xl font-bold text-white tracking-wide">Weatherly</h2>
        <p class="text-white/70 text-sm mt-1">Aapka daily weather partner.</p>
      </div>
      <div class="mt-8 pt-4 border-t   border-white/10 text-center">
      <p class="text-white/50 text-xs">
        &copy; 2026 Weatherly. Built with Vue & Tailwind.
      </p>
    </div>
      <div class="flex items-center space-x-4">
        <div class="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
           <span class="text-xs text-white">GH</span>
        </div>
        <div class="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer">
           <span class="text-xs text-white">LI</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useWeatherStore } from '../store/index'
const store = useWeatherStore()
</script>