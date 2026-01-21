import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weather: null,
    loading: false,
    error: null
  }),

  actions: {
    async fetchWeather(city) {
      this.loading = true

      try {
        const res = await fetch(`https://wttr.in/${city}?format=j1`)
        const data = await res.json()

        this.weather = data
      } catch (err) {
        this.error = "API error"
      }

      this.loading = false
    }
  }
})
