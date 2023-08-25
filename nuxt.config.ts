// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: { enabled: true },
  modules: [

    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@formkit/nuxt',
      
  ],
  css: [
    // SCSS file in the project
    "~/assets/css/main.scss", 
  ],
  
})
