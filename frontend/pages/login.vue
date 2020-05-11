<template>
  <main class="">
    <login-register-form :is-login-page="true" />
  </main>
</template>

<script>
import LoginRegisterForm from '@/components/forms/LoginRegisterForm'
export default {
  auth: 'guest',
  components: { LoginRegisterForm }
}
</script>
