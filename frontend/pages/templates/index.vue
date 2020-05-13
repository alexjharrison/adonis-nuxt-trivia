<template>
  <main class="container">
    <h1>my games</h1>
    <ul v-for="(template, i) in gameTemplates" :key="template.id">
      <n-link :to="`templates/${template.id}`">
        {{ i + 1 }}:
        {{ template.name }}
        {{ formatCalendarDate(template.created_at) }}
      </n-link>
    </ul>
  </main>
</template>

<script>
import { formatCalendarDate } from '@/helpers/dates'
export default {
  async asyncData({ $axios }) {
    const gameTemplates = await $axios.$get('game-templates')
    return { gameTemplates }
  },
  methods: {
    formatCalendarDate
  }
}
</script>

<style></style>
