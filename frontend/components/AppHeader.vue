<template>
  <header class="text-gray-100 bg-blue-600">
    <div class="flex max-w-screen-xl mx-auto sm:text-xl text-md ">
      <n-link
        to="/"
        class="m-4 mr-auto text-xl font-semibold leading-tight sm:text-3xl"
        >My Trivia Thing</n-link
      >
      <div v-if="$auth.loggedIn" class="my-auto mr-6">
        <n-link class="mr-6" to="/dashboard">My Dashboard</n-link>
        <a href="#" @click="$auth.logout()">Logout</a>
      </div>
      <div v-else class="my-auto mr-6">
        <n-link class="mr-6" to="/login">Login</n-link>
        <n-link to="/register">Register</n-link>
      </div>
    </div>
  </header>
</template>
