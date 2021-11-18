<template>
  <div class="h-px min-h-screen p-4 flex gap-2">
    <div
        class="relative p-4 bg-xivbase shadow-lg rounded-lg border border-black ring-2 ring-xivring w-1/3 flex flex-col min-h-full text-white">
      <div class="absolute inset-x-0 top-0 h-1/5 max-h-20 bg-gradient-to-t from-xivbase to-xivtop rounded-t-lg"></div>
      <div class="relative flex flex-col flex-grow min-h-full">
        <header class="header p-2">
          <g-link class="absolute inset-0" to="/">&Lt; Back</g-link>
        </header>
        <slot name="list"></slot>
      </div>
    </div>
    <div class="flex-grow min-h-full blog-border p-20 bg-blogbg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogLayout.vue"
}
</script>

<style scoped>
  .blog-border{
    border-image: url("../assets/icons/076902_hr1.png") 30% / auto / 0 stretch ;
  }
</style>