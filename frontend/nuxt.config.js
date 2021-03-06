export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "inventory",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui", "@/plugins/decimal"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "bootstrap-vue/nuxt", "@nuxtjs/auth-next"],

  auth: {
    strategies: {
      localStorage: false,
      laravelSanctum: {
        provider: "laravel/sanctum",
        url: process.env.API_URL,
        endpoints: {
          login: {
            url: "/api/login",
            method: "post"
          },
          logout: {
            url: "/api/logout",
            method: "post"
          },
          user: {
            url: "/api/me",
            method: "get",
            propertyName: false
          }
        }
      }
    }
  },

  axios: {
    baseURL: process.env.API_URL,
    credentials: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]]
    },
    transpile: [/^element-ui/]
  }
};
