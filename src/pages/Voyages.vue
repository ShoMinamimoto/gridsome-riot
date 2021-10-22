<!--suppress GraphQLUnresolvedReference -->
<template>
  <Layout>
    <PageTitle>Voyage Helper</PageTitle>
  </Layout>
</template>

<page-query>
query { allSubDestinations(filter: {Stars: {gt: 0}, Location: {ne: "str"}}, order: ASC) {
  edges { node {
    Location
    Map
  }
}
}
}
</page-query>

<script>
import PageTitle from "../components/PageTitle";
export default {
  components: {PageTitle},
  metaInfo:{
    title: "Voyage Helper"
  },
  data(){

  }
}
</script>

<style scoped>

</style>