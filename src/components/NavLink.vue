<template>
  <g-link :to="href" class="text-center text-xl font-semibold flex-1 rounded-lg p-1">
    <slot/>
  </g-link>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>
  .active, :hover{
    @apply bg-primary
  }
</style>