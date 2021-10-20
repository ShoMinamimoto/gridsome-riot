<template>
  <g-link :to="href" class="text-accent text-center flex-grow rounded-lg">
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

<style scoped>
  .active{
    @apply bg-primary
  }
</style>