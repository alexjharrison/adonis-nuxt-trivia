<template>
  <main class="container">
    {{ $route.params.id }}
    {{ gameData }}
  </main>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const gameData = await $axios.$get('game-templates/' + params.id)
    return { gameData }
  }
}
</script>

<style></style>
