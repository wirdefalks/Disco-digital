export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Disco Digital',
    htmlAttrs: {
      lang: 'sv'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Har du ibland problem med Canvas, Word, Powerpoint eller Zoom? Få lösningen eller tipset du letar efter i vår resurskatalog Disco Digital som betyder att lära sig digitalt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css', './assets/css/tailwind.css'],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/preview.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
    'nuxt-build-optimisations',
    '@nuxtjs/google-fonts',
    '@aceforth/nuxt-optimized-images',
		'@nuxtjs/tailwindcss',
		'nuxt-compress',
		'@nuxtjs/sanity',
    '@nuxtjs/pwa',
	],
  optimizedImages: {
    optimizeImages: true
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios','@nuxtjs/toast'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
//   build: {
//   transpile: ['gsap',/@fullcalendar.*/],
  
// },
googleFonts: {
  families: {
   
    'Space+Grotesk': [400, 700],
  },
  preconnect: true,
  preload: true,
  prefetch: true
},
toast: {
  position: 'bottom-right',
  duration:3000,
  register: [ // Register custom toasts
    {
      name: 'copied',
      message: 'Link copied!',
      options: {
        type: 'success'
      }
    }
  ]
},
sanity: {
  projectId: 'qp66vak1',
  dataset:'production',
  apiVersion: 'v2021-03-25',
  minimal: true,
  useCdn: false,
  },
}
