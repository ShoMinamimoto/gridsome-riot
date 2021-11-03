<template>
  <Layout>
    <PageTitle>Links</PageTitle>
    <LinkCategory/>
  </Layout>
</template>

<script>
import PageTitle from "../components/PageTitle";
import LinkCategory from "../components/LinkCategory";

export default {
  components: {LinkCategory, PageTitle},
  metaInfo: {
    title: "Links"
  }
}
</script>

<style scoped>

</style>