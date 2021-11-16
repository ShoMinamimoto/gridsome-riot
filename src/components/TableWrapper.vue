<template>
  <div class="table table-fixed w-full text-center">
    <div class="table-row-group">
      <div class="table-row table-header-group">
        <div v-for="header in headers" class="table-cell">{{ header }}</div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TableWrapper",
  props: {
    headers: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>