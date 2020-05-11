<template>
  <div class="mx-auto box">
    <h2 class="text-4xl">{{ isLoginPage ? 'Login' : 'Register' }}</h2>
    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col mx-auto text-2xl box"
    >
      <label v-if="isLoginPage" for="username">Display Name</label>
      <input
        v-if="isLoginPage"
        id="username"
        v-model="username"
        type="text"
        name="username"
      />
      <label for="email">Email</label>
      <input id="email" v-model="email" type="text" name="email" />
      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" name="password" />
      <button
        class="self-center px-4 py-1 mt-12 text-3xl text-white bg-orange-500 border border-orange-600 rounded-md"
        type="submit"
      >
        Submit
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
      password: 'alex'
    }
  },
  methods: {
    async handleSubmit() {
      const { username, email, password } = this

      if (this.isLoginPage) {
        this.$auth.loginWith('local', {
          data: { email, password }
        })
      } else {
        await this.$axios.post('/api/auth/register', {
          username,
          email,
          password
        })
        this.$auth.loginWith('local', { data: { email, password } })
      }
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
  @apply mt-4 mb-1;
}
input {
  @apply border border-gray-600 py-1 px-2 rounded;
}
</style>
