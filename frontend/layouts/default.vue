<template>
  <div class="min-h-screen bg-blue-100 bg-opacity-50">
    <app-header />
    <nuxt class="h-full px-4 mx-auto min-w-screen-xl" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  components: { AppHeader },
  data() {
    return {
      message: ''
    }
  },
  mounted() {},
  methods: {
    login() {
      this.$auth.loginWith('local', {
        data: {
          email: 'alex@alex.alex',
          password: 'alex'
        }
      })
    },
    logout() {
      this.$auth.logout()
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  html,
  body {
    min-height: 100%;
  }
}
</style>
