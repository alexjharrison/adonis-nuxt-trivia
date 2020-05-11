export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  server: {
    port: 8416,
    host: '0.0.0.0'
  },

  /*
   ** Set global middleware
   */
  middleware: 'auth',

  /*
   ** Config auth strategy
   */
  auth: {
    local: {
      endpoints: {
        login: {
          url: '/auth/login',
          method: 'post',
          propertyName: 'token'
        },
        logout: {
          url: '/auth/logout',
          method: 'post'
        },
        user: { url: '/auth/user', method: 'get', propertyName: 'user' }
      },
      redirect: {
        login: '/login',
        logout: '/',
        home: '/dashboard'
      }
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */

  css: [],
  /*
   ** Plugins to load before mounting the App
   */

  plugins: ['@/plugins/universal-components.js'],
  /*
   ** Axios Config
   */

  axios: {
    proxy: true
  },

  /*
   ** Proxy Config
   */
  proxy: {
    '/api/': { target: 'http://localhost:3333/', pathRewrite: { '^/api/': '' } }
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Set SVG Loader
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader']
      })

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
