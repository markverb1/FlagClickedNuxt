export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'When Flag Clicked',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Tutorials by scratchers, for scratchers"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/assets/apple-touch-icon-ipad-retina-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/assets/apple-touch-icon-iphone-retina-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/assets/apple-touch-icon-ipad-76x76.png"
      }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
     '@nuxtjs/color-mode'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
