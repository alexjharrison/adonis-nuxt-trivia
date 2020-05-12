<template>
  <main class="">
    <login-register-form :is-login-page="false" />
  </main>
</template>

<script>
import LoginRegisterForm from '@/components/forms/LoginRegisterForm'
export default {
  auth: 'guest',
  components: { LoginRegisterForm }
}
</script>
