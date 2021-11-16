<template>
  <div class="table-row-group">
    <div v-for="row in rows" class="table-row">
      <div v-for="value in row.node" class="table-cell">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableContents",
  props: {
    rows: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>