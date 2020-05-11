<template>
  <component :is="icon" class="h-6 fill-current" />
</template>

<script>
export default {
  props: {
    name: { type: String, default: 'anchor' }
  },
  computed: {
    icon() {
      return () =>
        import(`@/assets/icons/${this.name}.svg`).catch(e => {
          console.error(
            `Cannot find icon named ${this.name}.  Here's an anchor ya dingus.`
          )
          return import(`@/assets/icons/anchor.svg`)
        })
    }
  }
}
</script>
