// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
// vite:false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/sanity'],
  sanity: {
    projectId: "21fy9g0s",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true,
  },
  server: {
    port: 3000, 
    host: '0.0.0.0'
  },
  css: ['~/assets/main.css'],
  plugins: [
    { src: '~/plugins/sanity-image-builder.js', mode: 'client' }
  ]
})