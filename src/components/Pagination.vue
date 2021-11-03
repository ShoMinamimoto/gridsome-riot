<template>
  <div class="flex w-1/2 mx-auto text-center m-4 font-bold text-xl">
    <button class="flex-grow" type="button" @click="pageFirst">&laquo;</button>
    <button class="flex-grow" type="button" @click="pagePrev">&lt;</button>
    <span class="flex-grow">{{ page }} / {{ pageMax }}</span>
    <button class="flex-grow" type="button" @click="pageNext">&gt;</button>
    <button class="flex-grow" type="button" @click="pageLast">&raquo;</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    items: {
      type: Array,
      required: true
    },
    pageLength: {
      type: Number,
      required: true,
      default: 10
    }
  },
  data() {
    return {
      page: 1,
      pageMax: Math.floor(this.items.length / this.pageLength) + 1
    }
  },
  methods: {
    pageNext: function () {
      if (this.page < this.pageMax) this.page++;
      this.pageChange();
    },
    pagePrev: function () {
      if (this.page > 1) this.page--;
      this.pageChange();
    },
    pageFirst: function () {
      this.page = 1;
      this.pageChange();
    },
    pageLast: function () {
      this.page = this.pageMax;
      this.pageChange();
    },
    pageChange: function () {
      this.$emit('page-change', this.page);
    }
  }
}
</script>

<style scoped>

</style>