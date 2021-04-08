export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Orario ICE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'Orario ICE', content: 'Questo sito consente di visualzzare l\' orario del corso di Ingegneria Informatica, delle Comunicazioni ed Elettronica dell\' Università degli studi di Trento' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon2.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    
    'nuxt-clipboard2',

    '@nuxtjs/device',

    'nuxt-fontawesome',
  ],
  /*
  buefy: {
    materialDesignIcons: true,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon'
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  */
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Orario ICE',
      description: 'Questa PWA consente di visualzzare l\' orario e accedere alle lezioni del corso di Ingegneria Informatica, delle Comunicazioni ed Elettronica dell\' Università degli studi di Trento',
      short_name: 'Orario ICE',
      lang: 'it',
      theme_color: '#209cee',
      display: 'fullscreen',
    },
    meta: {
      author: 'Samuele Mazzei',
      theme_color: '#209cee',
      lang: 'it',
    },
    icon: {
      fileName: 'icon2.png',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
