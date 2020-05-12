<template>
  <div class="mx-auto box">
    <h2 class="mt-3 text-4xl font-semibold text-orange-600">
      {{ isLoginPage ? 'Account Login' : 'Register New Account' }}
    </h2>
    <form @submit.prevent="handleSubmit">
      <div class="flex flex-col mx-auto text-2xl box">
        <label v-if="!isLoginPage" for="username">Display Name</label>
        <input
          v-if="!isLoginPage"
          id="username"
          v-model="username"
          type="text"
          name="username"
          required
        />
        <label for="email">Email</label>
        <input id="email" v-model="email" type="text" name="email" required />
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          required
        />
      </div>
      <button
        class="self-center px-3 pb-1 mt-10 text-2xl text-white transition-colors duration-150 bg-orange-500 border border-orange-700 rounded-md hover:text-white hover:bg-orange-700"
        type="submit"
      >
        {{ isLoginPage ? 'Login' : 'Register' }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: { isLoginPage: { type: Boolean, required: true } },
  data() {
    return {
      username: 'alex',
      email: 'alex@alex.alex',
      password: 'alex',
      isSubmitting: false
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      const { username, email, password } = this

      try {
        if (this.isLoginPage) {
          await this.$auth.loginWith('local', {
            data: { email, password }
          })
        } else {
          const {
            data: { token }
          } = await this.$axios.post('auth/register', {
            username,
            email,
            password
          })
          await this.$auth.setUserToken(token)
        }
      } catch (e) {
        this.$toasted.error(
          (this.isLoginPage ? 'Login' : 'Registration') + ' Failed!',
          {
            theme: 'outline',
            position: 'top-right',
            duration: 4000
          }
        )
      }
      this.isSubmitting = false
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 400px;
  @apply max-w-full;
}
label {
  @apply mt-4 font-light mb-1;
}
input {
  @apply border border-gray-600 py-1 px-2 rounded;
}
</style>
